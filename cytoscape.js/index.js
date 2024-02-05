var cy = cytoscape({
    headless: false,
    container: document.getElementById('cy'), // container to render in
  
    elements: [ // list of graph elements to start with
      /**
       * Agent
       */
      {
        data: {
          id: 'exa:0000-0003-0711-5196',
          type: 'agent',
          title: 'M.Sc.',
          mbox: 'felix.bartusch[at]uni-tuebingen.de',
          givenName: 'Felix',
          familyName: 'Bartusch',
          label: 'Felix Bartusch',
          orcid: '0000-0003-0711-5196'
        }
      },

      /**
       * Controller (e.g. Nextflow WFMS)
       */
      {
        data: {
          id: 'ex:Nextflow',
          type: 'entity',
          softwareVersion: '23.04.0',
          timestamp: '01-04-2023 21:09 UTC',
          build: '5857',
          label: 'Nextflow',
        }
      },

      /**
       * Program elements
       */
      {
        // The Workflow 'program'/'script' (e.g. plan)
        data: {
          id: 'exa:80f4c533789c5a76dff0605e198e65e2',
          type: 'entity',
          label: 'main.nf',
          sha256: '80f4c533789c5a76dff0605e198e65e2',
          path: '/home/felix/github/nf-provone/plugins/nf-provone/src/testResources/main.nf'
        }
      },
      {
        // The INDEX process
        data: {
          id: 'ex:-378936176',
          type: 'entity',
          label: 'INDEX',
          sha256: 'ex:-378936176',
          script: 'salmon index --threads 1 -t transcriptome.fa -i salmon_index'
        }
      },



      /**
       * Execution elements
       */
      {
        // The workflow execution
        data: {
          id: 'ex:b7510a0e-7ae9-472e-9128-4a91ab6bc0ca',
          type: 'activity',
          startTime: '2024-01-30T06:31:57.514+01:00',
          endTime: '2024-01-30T06:32:05.580+01:00',
          workDir: '/home/felix/github/nf-provone/plugins/nf-provone/work',
          launchDir: '/home/felix/github/nf-provone/plugins/nf-provone',
          label: 'special_tuckerman'
        }
      },
      {
        // INDEX step execution
        data: {
          id: 'ex:498b837a570256cdf478a3b69156da32',
          type: 'activity',
          startTime: '2024-02-04T18:15:52.627+01:00',
          endTime: '2024-02-04T18:15:53.990+01:00',
          label: 'INDEX'
        }
      },

      /**
       * Input / Output files
       */
      {
        data: {
          id: 'ex:7715b3bbfd99778047da31cee861fe1001fe4f58',
          type: 'entity',
          label: 'transcriptome.fa',
          sha256: '7715b3bbfd99778047da31cee861fe1001fe4f58',
        }
      },
      {
        data: {
          id: 'ex:4ce9771472dfacdd9df79fc7c4605c7f8509b053',
          type: 'entity',
          label: 'refAccumLengths.bin',
          sha256: '4ce9771472dfacdd9df79fc7c4605c7f8509b053',
        }
      },
      {
        data: {
          id: 'ex:698f424d65d1f038392ed72111583630a43b76ea',
          type: 'entity',
          label: 'complete_ref_lens.bin',
          sha256: '698f424d65d1f038392ed72111583630a43b76ea',
        }
      },
      {
        data: {
          id: 'ex:12f2b2ff16b335e4a2bff5abddfad178c390a6ff',
          type: 'entity',
          label: 'ctg_offsets.bin',
          sha256: '12f2b2ff16b335e4a2bff5abddfad178c390a6ff',
        }
      },
      {
        data: {
          id: 'ex:738d4113528aec282eb78feb4767e5a21f4ccfae',
          type: 'entity',
          label: 'info.json',
          sha256: '12f2b2ff16b335e4a2bff5abddfad178c390a6ff',
        }
      },
      //TODO: reflengths.bin and complete_ref_lens.bin are the same files, eg. have the same hash value
      {
        data: {
          id: 'ex:698f424d65d1f038392ed72111583630a43b76ea',
          type: 'entity',
          label: 'reflengths.bin',
          sha256: '698f424d65d1f038392ed72111583630a43b76ea',
        }
      },













      /**
       * Edges
       */




      {
        // Workflow Execution is associated with Agent
        data: {
          source: 'ex:b7510a0e-7ae9-472e-9128-4a91ab6bc0ca',
          target: 'exa:0000-0003-0711-5196',
          label : 'Was Associated With'
        }
      },
      {
        // Workflow execution has plan
        data: {
          source: 'ex:b7510a0e-7ae9-472e-9128-4a91ab6bc0ca',
          target: 'exa:80f4c533789c5a76dff0605e198e65e2',
          label : 'Had Plan'
        }
      },
      {
        // WFMS runs workflow
        data: {
          source: 'ex:Nextflow',
          target: 'exa:80f4c533789c5a76dff0605e198e65e2',
          label : 'Runs'
        }
      },
      {
        // INDEX Execution is associated with Agent
        data: {
          source: 'ex:498b837a570256cdf478a3b69156da32',
          target: 'exa:0000-0003-0711-5196',
          label : 'Was Associated With'
        }
      },
      {
        // INDEX execution has plan
        data: {
          source: 'ex:498b837a570256cdf478a3b69156da32',
          target: 'ex:-378936176',
          label : 'Had Plan'
        }
      },
      {
        // INDEX execution is part of workflow execution
        data: {
          source: 'ex:498b837a570256cdf478a3b69156da32',
          target: 'ex:b7510a0e-7ae9-472e-9128-4a91ab6bc0ca',
          label : 'WasPartOf'
        }
      },
      {
        // INDEX program is part of workflow
        data: {
          source: 'ex:-378936176',
          target: 'exa:80f4c533789c5a76dff0605e198e65e2',
          label : 'WasPartOf'
        }
      },

      /**
       * Usage
       */
      {
        // INDEX uses ...
        data: {
          source: 'ex:498b837a570256cdf478a3b69156da32',
          target: 'ex:7715b3bbfd99778047da31cee861fe1001fe4f58',
          label : 'used'
        }
      },

      /**
       * Generation
       */

      // ... wasGeneratedBy INDEX
      {
        data: {
          source: 'ex:4ce9771472dfacdd9df79fc7c4605c7f8509b053',
          target: 'ex:498b837a570256cdf478a3b69156da32',
          label : 'wasGeneratedBy'
        }
      },
      {
        data: {
          source: 'ex:698f424d65d1f038392ed72111583630a43b76ea',
          target: 'ex:498b837a570256cdf478a3b69156da32',
          label : 'wasGeneratedBy'
        }
      },
      {
        data: {
          source: 'ex:12f2b2ff16b335e4a2bff5abddfad178c390a6ff',
          target: 'ex:498b837a570256cdf478a3b69156da32',
          label : 'wasGeneratedBy'
        }
      },
      {
        data: {
          source: 'ex:738d4113528aec282eb78feb4767e5a21f4ccfae',
          target: 'ex:498b837a570256cdf478a3b69156da32',
          label : 'wasGeneratedBy'
        }
      },
      {
        data: {
          source: 'ex:698f424d65d1f038392ed72111583630a43b76ea',
          target: 'ex:498b837a570256cdf478a3b69156da32',
          label : 'wasGeneratedBy'
        }
      },



    ],
  




























    style: [ // the stylesheet for the graph
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
        selector: 'node',
        style: {
          'content': 'data(label)',
          'label': 'data(label)'
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

      {
        selector: 'edge',
        style: {
          'width': 3,
          'line-color': '#ccc',
          'target-arrow-color': '#ccc',
          'target-arrow-shape': 'triangle',
          'curve-style': 'bezier',
          'label': 'data(label)'
        }
      }
    ],
  
    layout: {
      name: 'breadthfirst'
    }
  
  });

// Events

// Tap example
/*cy.on('tap', 'node', function(evt){
  var node = evt.target;
  console.log( 'tapped ' + node.id() );
});*/

//TODO use cytoscape-popper with tippy.js for tooltips
// https://github.com/cytoscape/cytoscape.js-popper

var makeTippy = function(ele, text){
  var ref = ele.popperRef();

  // Since tippy constructor requires DOM element/elements, create a placeholder
  var dummyDomEle = document.createElement('div');

  var tip = tippy( dummyDomEle, {
    getReferenceClientRect: ref.getBoundingClientRect,
    trigger: 'manual', // mandatory
    // dom element inside the tippy:
    content: function(){ // function can be better for performance
      var div = document.createElement('div');

      div.innerHTML = text;

      return div;
    },
    // your own preferences:
    arrow: true,
    placement: 'bottom',
    hideOnClick: false,

    sticky: "reference",

    // if interactive:
    interactive: true,
    appendTo: document.body // or append dummyDomEle to document.body
  } );

  return tip;
};

var a = cy.getElementById('exa:0000-0003-0711-5196');
//TODO Make Orcid clickable link
var tooltipText = a.data('title') + " " + a.data('givenName') + " " + a.data('familyName') + "</br>ORCID: " + a.data('orcid') + "</br>Mail: " + a.data('mbox')

/*
id: 'exa:0000-0003-0711-5196',
type: 'agent',
title: 'M.Sc.',
mbox: 'felix.bartusch[at]uni-tuebingen.de',
givenName: 'Felix',
familyName: 'Bartusch',
label: 'Felix Bartusch',
orcid: '0000-0003-0711-5196'
*/

var tippyA = makeTippy(a, tooltipText);
tippyA.hide();

// Mouseover
cy.on('mouseover', 'node[type="agent"]', function(evt){
  var node = evt.target;
  tippyA.show();
});

// Mouseout
cy.on('mouseout', 'node[type="agent"]', function(evt){
  var node = evt.target;
  tippyA.hide();
});
