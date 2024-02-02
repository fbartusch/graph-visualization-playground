var cy = cytoscape({
    headless: false,
    container: document.getElementById('cy'), // container to render in
  
    elements: [ // list of graph elements to start with
      {
        // Entity node
        data: { id: 'entity', type: 'entity'}
      },

      {
        // Activity node
        data: { id: 'activity', type: 'activity'}
      },

      {
        // Agent node
        data: { id: 'agent', type: 'agent'}
      },
    ],

    
  
    style: [ // the stylesheet for the graph
      {
        selector: 'node',
        style: {
          'label': 'data(id)'
        }
      },
      // Entity node Style
      {
        selector: 'node[type="entity"]',
        style: {
          'shape': 'ellipse',
          'width': '75px',
          'height': '40px',
          'background-color': '#fffc87',
          'border-width': '1px',
          'border-color': '#353aff'
        }
      },
      // Activity node Style
      {
        selector: 'node[type="activity"]',
        style: {
          'shape': 'rectangle',
          'width': '40px',
          'height': '40px',
          'background-color': '#9fb1fc',
          'border-width': '1px',
          'border-color': '#353aff'
        }
      },
      // Agent node style
      {
        selector: 'node[type="agent"]',
        style: {
          'shape': 'polygon',
          'shape-polygon-points': '1, 1, -1 1, -1, 0, 0, -1, 1, 0',
          'width': '40px',
          'height': '40px',
          'background-color': '#e27602',
          'border-width': '1px',
          'border-color': 'black'
        }
      },
      {
        selector: 'edge',
        style: {
          'width': 3,
          'line-color': '#ccc',
          'target-arrow-color': '#ccc',
          'target-arrow-shape': 'triangle',
          'curve-style': 'bezier'
        }
      }
    ],
  
    layout: {
      name: 'grid',
      rows: 1
    }
  
  });



//  cy.add({
//    group: 'nodes',
//    data: { weight: 75 },
//    position: { x: 200, y: 200 }
//    });
//
//// can use reference to eles later
//var eles = cy.add([
//    { group: 'nodes', data: { id: 'n0' }, position: { x: 100, y: 100 } },
//    { group: 'nodes', data: { id: 'n1' }, position: { x: 200, y: 200 } },
//    { group: 'edges', data: { id: 'e0', source: 'n0', target: 'n1' } }
//  ]);
