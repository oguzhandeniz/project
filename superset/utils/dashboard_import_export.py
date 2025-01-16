# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
import logging

from markdown_it import MarkdownIt

from superset import db
from superset.models.dashboard import Dashboard

logger = logging.getLogger(__name__)

def process_markdown(markdown_text):
    """
    Convert markdown text to HTML using markdown-it-py.
    
    :param markdown_text: The raw markdown text.
    :return: List of formatted HTML text rows.
    """
    md = MarkdownIt()
    rendered_html = md.render(markdown_text)
    rows = rendered_html.splitlines()
    return rows

def export_dashboards() -> str:
    """Returns all dashboards metadata as a json dump"""
    logger.info("Starting export")
    dashboards = db.session.query(Dashboard)
    dashboard_ids = set()
    for dashboard in dashboards:
        dashboard_ids.add(dashboard.id)
    data = Dashboard.export_dashboards(dashboard_ids)
    return data

def traverse_dashboard(layout, element_id, order):
    """
    Recursively traverse the dashboard layout and collect elements (charts, markdowns, etc.)
    along with their metadata in the order they appear from top to bottom and left to right.
    
    :param layout: The dashboard layout dictionary.
    :param element_id: The current element ID to traverse.
    :param order: The list that accumulates the order of elements and their metadata.
    """
    element = layout[element_id]
    
    if element['type'] in ['CHART', 'MARKDOWN', 'HEADER']:
        # Add the element and its metadata to the order list
        order.append({
            'type': element['type'],
            'id': element['id'],
            'metadata': element['meta']
        })
    
    if 'children' in element:
        # Traverse children elements recursively
        for child_id in element['children']:
            traverse_dashboard(layout, child_id, order)


def compute_dashboard_order(layout):
    """
    Compute the order of elements in the dashboard from top to bottom and left to right,
    storing both the type and metadata.
    
    :param layout: The dashboard layout dictionary.
    :return: A list of elements and their metadata in the computed order.
    """
    order = []
    root_id = 'ROOT_ID'
    
    # Start traversing from the root
    traverse_dashboard(layout, root_id, order)
    
    return order

