/**
 * TODO
 * - Waspartof
 * - hadplan
 */


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
        // INDEX process
        data: {
          id: 'ex:-378936176',
          type: 'entity',
          label: 'INDEX',
          sha256: '-378936176',
          script: 'salmon index --threads 1 -t transcriptome.fa -i salmon_index'
        }
      },
      {
        // QUANTIFICATION process
        data: {
          id: 'ex:1247472875',
          type: 'entity',
          label: 'QUANTIFICATION',
          sha256: '1247472875',
          script: 'salmon quant --threads 1 --libType=U -i salmon_index -1 gut_1.fq -2 gut_2.fq -o gut'
        }
      },
      {
        // FASTQC process
        data: {
          id: 'ex:-293564460',
          type: 'entity',
          label: 'FASTQC',
          sha256: '-293564460',
          script: 'mkdir fastqc_gut_logs\n    fastqc -o fastqc_gut_logs -f fastq -q gut_1.fq gut_2.fq'
        }
      },
      {
        // MULTIQC process
        data: {
          id: 'ex:-1107855909',
          type: 'entity',
          label: 'MULTIQC',
          sha256: '-1107855909',
          script: 'multiqc .'
        }
      },


      /**
       * Execution elements
       */

      {
        // The workflow execution
        data: {
          id: 'ex:c87364b9-0bd9-4f76-a1c2-7513618932d1',
          type: 'activity',
          startTime: '2024-02-08T05:40:28.829+01:00',
          endTime: '2024-02-08T05:40:36.519+01:00',
          workDir: '/home/felix/github/nf-provone/plugins/nf-provone/work',
          projectDir: '/home/felix/github/nf-provone/plugins/nf-provone/src/testResources',
          launchDir: '/home/felix/github/nf-provone/plugins/nf-provone',
          label: 'gloomy_cantor'
        }
      },
      {
        // INDEX step execution
        data: {
          id: 'ex:d17fab357a9218b3e4e78fe1b4a07861',
          type: 'activity',
          startTime: '2024-02-08T05:40:29.713+01:00',
          endTime: '2024-02-08T05:40:30.905+01:00',
          label: 'INDEX'
        }
      },
      {
        // QUANTIFICATION step execution
        data: {
          id: 'ex:33d96d2363e5acbf8e2f39f0bbc8a7df',
          type: 'activity',
          startTime: '2024-02-08T05:40:31.005+01:00',
          endTime: '2024-02-08T05:40:31.834+01:00',
          label: 'QUANTIFICATION'
        }
      },
      {
        // FASTQC step execution
        data: {
          id: 'ex:e5c2f82acf8ee54d6a26998f267db67f',
          type: 'activity',
          startTime: '2024-02-08T05:40:29.714+01:00',
          endTime: '2024-02-08T05:40:33.818+01:00',
          label: 'FASTQC'
        }
      },
      {
        // MULTIQC step execution
        data: {
          id: 'ex:fbbc22625b27e35efbec66b9fd2feba9',
          type: 'activity',
          startTime: '2024-02-08T05:40:33.919+01:00',
          endTime: '2024-02-08T05:40:36.505+01:00',
          label: 'MULTIQC'
        }
      },

      /**
       * Input / Output files
       */

      {
        data: {
          id: 'ex:23d667c_1314e1e',
          type: 'entity',
          label: 'transcriptome.fa',
          sha256: '7715b3bbfd99778047da31cee861fe1001fe4f58',
          path: '/home/felix/github/nf-provone/plugins/nf-provone/src/testResources/data/ggal/transcriptome.fa'
        }
      },
      {
        data: {
          id: 'ex:9084b10_b778324',
          type: 'entity',
          label: 'refAccumLengths.bin',
          sha256: '9084b10943dafd73a3518a04993951a7478cd5ec00c2e02bb066f641f709dd89',
          path: '/home/felix/github/nf-provone/plugins/nf-provone/work/d1/7fab357a9218b3e4e78fe1b4a07861/salmon_index/refAccumLengths.bin'
        }
      },
      {
        data: {
          id: 'ex:e3f6905_dcda968',
          type: 'entity',
          label: 'complete_ref_lens.bin',
          sha256: 'e3f6905d3203db121629d50bbd33ca9b84d544447b8987650c4001de558b36b',
          path: '/home/felix/github/nf-provone/plugins/nf-provone/work/d1/7fab357a9218b3e4e78fe1b4a07861/salmon_index/complete_ref_lens.bin'
        }
      },
      {
        data: {
          id: 'ex:6fa36a5_ee98019',
          type: 'entity',
          label: 'ctg_offsets.bin',
          sha256: '6fa36a5f0a3082dc5112af4af724e7405f178b0e3c62541740275cc70a892664',
          path: '/home/felix/github/nf-provone/plugins/nf-provone/work/d1/7fab357a9218b3e4e78fe1b4a07861/salmon_index/ctg_offsets.bin'
        }
      },
      {
        data: {
          id: 'ex:90c507c_b60532b',
          type: 'entity',
          label: 'info.json',
          sha256: '90c507c50d6c6b9a9352fa50bfe2ee5723dce2cbbc89116ee5d69190678320c6',
          path: '/home/felix/github/nf-provone/plugins/nf-provone/work/d1/7fab357a9218b3e4e78fe1b4a07861/salmon_index/info.json'
        }
      },
      {
        data: {
          id: 'ex:e3f6905_fe96b5d',
          type: 'entity',
          label: 'reflengths.bin',
          sha256: 'e3f6905d3203db121629d50bbd33ca9b84d544447b8987650c4001de558b36b',
          path: '/home/felix/github/nf-provone/plugins/nf-provone/work/d1/7fab357a9218b3e4e78fe1b4a07861/salmon_index/reflengths.bin'
        }
      },
      {
        data: {
          id: 'ex:7a79a91_35ab8e6',
          type: 'entity',
          label: 'ref_indexing.log',
          sha256: '7a79a91e44a7a85fbb67cbef62fa2c7a27b49a986c0895574662a9069c40156d',
          path: '/home/felix/github/nf-provone/plugins/nf-provone/work/d1/7fab357a9218b3e4e78fe1b4a07861/salmon_index/ref_indexing.log'
        }
      },
      {
        data: {
          id: 'ex:5f1a28f_b788de0',
          type: 'entity',
          label: 'refseq.bin',
          sha256: '5f1a28fe658e11a2369706eae2f49cfe2c110e9379b2c49feb3936df599029e4',
          path: '/home/felix/github/nf-provone/plugins/nf-provone/work/d1/7fab357a9218b3e4e78fe1b4a07861/salmon_index/refseq.bin'
        }
      },
      {
        data: {
          id: 'ex:7f563eb_a6b5a2a',
          type: 'entity',
          label: 'duplicate_clusters.tsv',
          sha256: '7f563eb912e75fd65a8fbb660f2f26de09a1091fe6a6271f0009db0c5f287433',
          path: '/home/felix/github/nf-provone/plugins/nf-provone/work/d1/7fab357a9218b3e4e78fe1b4a07861/salmon_index/duplicate_clusters.tsv'
        }
      },
      {
        data: {
          id: 'ex:3030491_c19ec2d',
          type: 'entity',
          label: 'mphf.bin',
          sha256: '3030491103a7991687f8119426e414c51aea9639bf6da61ae8a631dd435e94f9',
          path: '/home/felix/github/nf-provone/plugins/nf-provone/work/d1/7fab357a9218b3e4e78fe1b4a07861/salmon_index/mphf.bin'
        }
      },
      {
        data: {
          id: 'ex:d4a0962_59a5251',
          type: 'entity',
          label: 'rank.bin',
          sha256: 'd4a096297d6752e34380768a18e9aaece40ed4e5152b3307a7abed6b753368ce',
          path: '/home/felix/github/nf-provone/plugins/nf-provone/work/d1/7fab357a9218b3e4e78fe1b4a07861/salmon_index/rank.bin'
        }
      },
      {
        data: {
          id: 'ex:2b9f938_83e431b',
          type: 'entity',
          label: 'pos.bin',
          sha256: '2b9f9385e5d3a2ee506a89328cdc08fc737645535eb466ad406474174bd7acab',
          path: '/home/felix/github/nf-provone/plugins/nf-provone/work/d1/7fab357a9218b3e4e78fe1b4a07861/salmon_index/pos.bin'
        }
      },
      {
        data: {
          id: 'ex:39e1a4a_350c36f',
          type: 'entity',
          label: 'versionInfo.json',
          sha256: '39e1a4a0fef1da72812c1fa163fc342c926f24571a8ee2f7ebc824d4ca8f07e3',
          path: '/home/felix/github/nf-provone/plugins/nf-provone/work/d1/7fab357a9218b3e4e78fe1b4a07861/salmon_index/versionInfo.json'
        }
      },
      {
        data: {
          id: 'ex:828d16b_5d04b09',
          type: 'entity',
          label: 'pre_indexing.log',
          sha256: '828d16b96af97b576da070b7fb99c28fa9af8f43b2e2b2fdc2eee6a055d128b7',
          path: '/home/felix/github/nf-provone/plugins/nf-provone/work/d1/7fab357a9218b3e4e78fe1b4a07861/salmon_index/pre_indexing.log'
        }
      },
      {
        data: {
          id: 'ex:fb69af1_90653fc',
          type: 'entity',
          label: 'pre_indexing.log',
          sha256: 'fb69af12134dabd3255f60e785407ff8ff0e89f9d82c61949644276d569abd9c',
          path: '/home/felix/github/nf-provone/plugins/nf-provone/work/d1/7fab357a9218b3e4e78fe1b4a07861/salmon_index/ctable.bin'
        }
      },
      {
        data: {
          id: 'ex:9cbfabe_7f717cc',
          type: 'entity',
          label: 'eqtable.bin',
          sha256: '9cbfabe65198c0f0d4073c986395ec292f3a45bff51e29153cf1ed5ff6567add',
          path: '/home/felix/github/nf-provone/plugins/nf-provone/work/d1/7fab357a9218b3e4e78fe1b4a07861/salmon_index/eqtable.bin'
        }
      },
      {
        data: {
          id: 'ex:acdc365_b511593',
          type: 'entity',
          label: 'seq.bin',
          sha256: 'acdc3653b9c294ee13e6d50f782d49bcc34e0d391057fe100ba848db6ebb6754',
          path: '/home/felix/github/nf-provone/plugins/nf-provone/work/d1/7fab357a9218b3e4e78fe1b4a07861/salmon_index/seq.bin'
        }
      },
      {
        data: {
          id: 'ex:49e404b_67c45d0',
          type: 'entity',
          label: 'gut_1.fq',
          sha256: '49e404bd2adf9cd3bd82c542afa56aac60b1e8cdec7d2b7e2961eb42836a1428',
          path: '/home/felix/github/nf-provone/plugins/nf-provone/src/testResources/data/ggal/gut_1.fq'
        }
      },
      {
        data: {
          id: 'ex:5026e85_3966a98',
          type: 'entity',
          label: 'observed_bias.gz',
          sha256: '5026e8534eece566358cc949606b89ededf87f44940b7c471b8791f0e19af101',
          path: '/home/felix/github/nf-provone/plugins/nf-provone/work/33/d96d2363e5acbf8e2f39f0bbc8a7df/gut/aux_info/observed_bias.gz'
        }
      },
      {
        data: {
          id: 'ex:20faa8b_83f0c6f',
          type: 'entity',
          label: 'fld.gz',
          sha256: '20faa8bbde73d0677c489599de935abc39edf4d89cd547d02c33abdf11c4fff7',
          path: '/home/felix/github/nf-provone/plugins/nf-provone/work/33/d96d2363e5acbf8e2f39f0bbc8a7df/gut/aux_info/fld.gz'
        }
      },
      {
        data: {
          id: 'ex:fcdb9d1_dd8c630',
          type: 'entity',
          label: 'ambig_info.tsv',
          sha256: 'fcdb9d1bedb2532533467692f8f62127e3df5c0d8e2cb464913b2436b464e099',
          path: '/home/felix/github/nf-provone/plugins/nf-provone/work/33/d96d2363e5acbf8e2f39f0bbc8a7df/gut/aux_info/ambig_info.tsv'
        }
      },
      {
        data: {
          id: 'ex:2459d01_8550dbb',
          type: 'entity',
          label: 'meta_info.json',
          sha256: '2459d01ea24eeac53a1b85bb4126485614c407f20621c4e84cc4a4e238543292',
          path: '/home/felix/github/nf-provone/plugins/nf-provone/work/33/d96d2363e5acbf8e2f39f0bbc8a7df/gut/aux_info/meta_info.json'
        }
      },
      {
        data: {
          id: 'ex:5026e85_021684b',
          type: 'entity',
          label: 'observed_bias_3p.gz',
          sha256: '5026e8534eece566358cc949606b89ededf87f44940b7c471b8791f0e19af101',
          path: '/home/felix/github/nf-provone/plugins/nf-provone/work/33/d96d2363e5acbf8e2f39f0bbc8a7df/gut/aux_info/observed_bias_3p.gz'
        }
      },
      {
        data: {
          id: 'ex:4fd777a_e5ba483',
          type: 'entity',
          label: 'expected_bias.gz',
          sha256: '4fd777aa7f863a78c072a2b8f2aefac9ed9d6d6de332113fbe1adcb9632c7181',
          path: '/home/felix/github/nf-provone/plugins/nf-provone/work/33/d96d2363e5acbf8e2f39f0bbc8a7df/gut/aux_info/expected_bias.gz'
        }
      },
      {
        data: {
          id: 'ex:4d3ee73_447ce66',
          type: 'entity',
          label: 'cmd_info.json',
          sha256: '4d3ee73ee46f5667f6e228010ba9ce0a27a584f2f8b4b2e237da22c009755576',
          path: '/home/felix/github/nf-provone/plugins/nf-provone/work/33/d96d2363e5acbf8e2f39f0bbc8a7df/gut/cmd_info.json'
        }
      },
      {
        data: {
          id: 'ex:f1c78b0_5291ffb',
          type: 'entity',
          label: 'lib_format_counts.json',
          sha256: 'f1c78b0cc0e06df107ab598e91fcddc3a4633d5bbec87fce4ffa560b042059f0',
          path: '/home/felix/github/nf-provone/plugins/nf-provone/work/33/d96d2363e5acbf8e2f39f0bbc8a7df/gut/lib_format_counts.json'
        }
      },      
      {
        data: {
          id: 'ex:fa084e7_73f9a85',
          type: 'entity',
          label: 'quant.sf',
          sha256: 'fa084e79d9d69578ee8697dd008fdc143beef51b27c0e57c459ba3e086b8ed16',
          path: '/home/felix/github/nf-provone/plugins/nf-provone/work/33/d96d2363e5acbf8e2f39f0bbc8a7df/gut/quant.sf'
        }
      },
      {
        data: {
          id: 'ex:7dfc1ce_119220a',
          type: 'entity',
          label: 'salmon_quant.log',
          sha256: '7dfc1cee610012f55bcfc6017a2607c1c6857811f9a15f39c2054be647274c7c',
          path: '/home/felix/github/nf-provone/plugins/nf-provone/work/33/d96d2363e5acbf8e2f39f0bbc8a7df/gut/logs/salmon_quant.log'
        }
      },
      {
        data: {
          id: 'ex:e9b09fd_9130288',
          type: 'entity',
          label: 'flenDist.txt',
          sha256: 'e9b09fd1e064f6ae640f1f99a658d4723b18bcf55bba652e2211284cacad5f51',
          path: '/home/felix/github/nf-provone/plugins/nf-provone/work/33/d96d2363e5acbf8e2f39f0bbc8a7df/gut/libParams/flenDist.txt'
        }
      },
      {
        data: {
          id: 'ex:86d7ca8_0af3cce',
          type: 'entity',
          label: 'gut_2_fastqc.html',
          sha256: '86d7ca8778c2166d904cfee4f52373cdd64edcbacd1354c4b032649e17d5c7b3',
          path: '/home/felix/github/nf-provone/plugins/nf-provone/work/e5/c2f82acf8ee54d6a26998f267db67f/fastqc_gut_logs/gut_2_fastqc.html'
        }
      },
      {
        data: {
          id: 'ex:6dffe0d_2d4e363',
          type: 'entity',
          label: 'gut_1_fastqc.zip',
          sha256: '6dffe0d5a7ca71d9ea94eae3f2c0763e106e351c22ad72adfefc310ec32030fc',
          path: '/home/felix/github/nf-provone/plugins/nf-provone/work/e5/c2f82acf8ee54d6a26998f267db67f/fastqc_gut_logs/gut_1_fastqc.zip'
        }
      },
      {
        data: {
          id: 'ex:d57f045_8b7b3bd',
          type: 'entity',
          label: 'gut_2_fastqc.zip',
          sha256: 'd57f04563c25a250b6ab41d00c4859d5a7adcb97669a17155f6ec66316cfd084',
          path: '/home/felix/github/nf-provone/plugins/nf-provone/work/e5/c2f82acf8ee54d6a26998f267db67f/fastqc_gut_logs/gut_2_fastqc.zip'
        }
      },
      {
        data: {
          id: 'ex:5ece87a_3fea3af',
          type: 'entity',
          label: 'gut_1_fastqc.html',
          sha256: '5ece87ab4f5db1d79a36cb2f541d2d2d7fbf078fe5a7405c7cca0056a0f7d58f',
          path: '/home/felix/github/nf-provone/plugins/nf-provone/work/e5/c2f82acf8ee54d6a26998f267db67f/fastqc_gut_logs/gut_1_fastqc.html'
        }
      },
      {
        data: {
          id: 'ex:8655f96_a814b49',
          type: 'entity',
          label: 'multiqc_report.html',
          sha256: '8655f9659a209708b5e0d4ff51033ee620c72c71d849d57763b7fda1c7c9cdeb',
          path: '/home/felix/github/nf-provone/plugins/nf-provone/work/fb/bc22625b27e35efbec66b9fd2feba9/multiqc_report.html'
        }
      },

      /**
       * Edges
       */


      /*
       * Controls
       */

      {
        // WFMS runs workflow
        data: {
          source: 'ex:Nextflow',
          target: 'exa:80f4c533789c5a76dff0605e198e65e2',
          label : 'Runs'
        }
      },

      /*
       * Associations
       * Each Qualified Association in the  provenance .jsonld file will result
       * in two edges in the graph:
       *  - execution is associated with agent
       *  - execution has plan
       */

      {
        // Workflow Execution is associated with Agent
        data: {
          source: 'ex:c87364b9-0bd9-4f76-a1c2-7513618932d1',
          target: 'exa:0000-0003-0711-5196',
          label : 'Was Associated With'
        }
      },
      {
        // Workflow execution has plan
        data: {
          source: 'ex:c87364b9-0bd9-4f76-a1c2-7513618932d1',
          target: 'exa:80f4c533789c5a76dff0605e198e65e2',
          label : 'Had Plan'
        }
      },
      {
        // INDEX Execution is associated with Agent
        data: {
          source: 'ex:d17fab357a9218b3e4e78fe1b4a07861',
          target: 'exa:0000-0003-0711-5196',
          label : 'Was Associated With'
        }
      },
      {
        // INDEX execution has plan
        data: {
          source: 'ex:d17fab357a9218b3e4e78fe1b4a07861',
          target: 'ex:-378936176',
          label : 'Had Plan'
        }
      },
      {
        // ... Execution is associated with Agent
        data: {
          source: 'ex:33d96d2363e5acbf8e2f39f0bbc8a7df',
          target: 'exa:0000-0003-0711-5196',
          label : 'Was Associated With'
        }
      },
      {
        // ...  execution has plan
        data: {
          source: 'ex:33d96d2363e5acbf8e2f39f0bbc8a7df',
          target: 'ex:-378936176',
          label : 'Had Plan'
        }
      },
      {
        // ... Execution is associated with Agent
        data: {
          source: 'ex:e5c2f82acf8ee54d6a26998f267db67f',
          target: 'exa:0000-0003-0711-5196',
          label : 'Was Associated With'
        }
      },
      {
        // ...  execution has plan
        data: {
          source: 'ex:e5c2f82acf8ee54d6a26998f267db67f',
          target: 'ex:-378936176',
          label : 'Had Plan'
        }
      },
      {
        // ... Execution is associated with Agent
        data: {
          source: 'ex:fbbc22625b27e35efbec66b9fd2feba9',
          target: 'exa:0000-0003-0711-5196',
          label : 'Was Associated With'
        }
      },
      {
        // ...  execution has plan
        data: {
          source: 'ex:fbbc22625b27e35efbec66b9fd2feba9',
          target: 'ex:-378936176',
          label : 'Had Plan'
        }
      },

      /*
      * Was Part Of
      */

      // Process execution was part of workflow execution

      {
        data: {
          source: 'ex:d17fab357a9218b3e4e78fe1b4a07861',
          target: 'ex:c87364b9-0bd9-4f76-a1c2-7513618932d1',
          label : 'WasPartOf'
        }
      },
      {
        data: {
          source: 'ex:33d96d2363e5acbf8e2f39f0bbc8a7df',
          target: 'ex:c87364b9-0bd9-4f76-a1c2-7513618932d1',
          label : 'WasPartOf'
        }
      },
      {
        data: {
          source: 'ex:e5c2f82acf8ee54d6a26998f267db67f',
          target: 'ex:c87364b9-0bd9-4f76-a1c2-7513618932d1',
          label : 'WasPartOf'
        }
      },
      {
        data: {
          source: 'ex:fbbc22625b27e35efbec66b9fd2feba9',
          target: 'ex:c87364b9-0bd9-4f76-a1c2-7513618932d1',
          label : 'WasPartOf'
        }
      },

      // Process script is subprogram of Workflow

      {
        data: {
          source: 'ex:-378936176',
          target: 'exa:80f4c533789c5a76dff0605e198e65e2',
          label : 'HasSubProgram'
        }
      },
      {
        data: {
          source: 'ex:1247472875',
          target: 'exa:80f4c533789c5a76dff0605e198e65e2',
          label : 'HasSubProgram'
        }
      },
      {
        data: {
          source: 'ex:-293564460',
          target: 'exa:80f4c533789c5a76dff0605e198e65e2',
          label : 'HasSubProgram'
        }
      },
      {
        data: {
          source: 'ex:-1107855909',
          target: 'exa:80f4c533789c5a76dff0605e198e65e2',
          label : 'HasSubProgram'
        }
      },

      /**
       * Usage
       */

      {
        data: {
          source: 'ex:d17fab357a9218b3e4e78fe1b4a07861',
          target: 'ex:23d667c_1314e1e',
          label : 'used'
        }
      },
      {
        data: {
          source: 'ex:33d96d2363e5acbf8e2f39f0bbc8a7df',
          target: 'ex:9084b10_b778324',
          label : 'used'
        }
      },
      {
        data: {
          source: 'ex:33d96d2363e5acbf8e2f39f0bbc8a7df',
          target: 'ex:e3f6905_dcda968',
          label : 'used'
        }
      },
      {
        data: {
          source: 'ex:33d96d2363e5acbf8e2f39f0bbc8a7df',
          target: 'ex:6fa36a5_ee98019',
          label : 'used'
        }
      },
      {
        data: {
          source: 'ex:33d96d2363e5acbf8e2f39f0bbc8a7df',
          target: 'ex:90c507c_b60532b',
          label : 'used'
        }
      },
      {
        data: {
          source: 'ex:33d96d2363e5acbf8e2f39f0bbc8a7df',
          target: 'ex:e3f6905_fe96b5d',
          label : 'used'
        }
      },
      {
        data: {
          source: 'ex:33d96d2363e5acbf8e2f39f0bbc8a7df',
          target: 'ex:7a79a91_35ab8e6',
          label : 'used'
        }
      },
      {
        data: {
          source: 'ex:33d96d2363e5acbf8e2f39f0bbc8a7df',
          target: 'ex:5f1a28f_b788de0',
          label : 'used'
        }
      },
      {
        data: {
          source: 'ex:33d96d2363e5acbf8e2f39f0bbc8a7df',
          target: 'ex:7f563eb_a6b5a2a',
          label : 'used'
        }
      },
      {
        data: {
          source: 'ex:33d96d2363e5acbf8e2f39f0bbc8a7df',
          target: 'ex:3030491_c19ec2d',
          label : 'used'
        }
      },
      {
        data: {
          source: 'ex:33d96d2363e5acbf8e2f39f0bbc8a7df',
          target: 'ex:d4a0962_59a5251',
          label : 'used'
        }
      },
      {
        data: {
          source: 'ex:33d96d2363e5acbf8e2f39f0bbc8a7df',
          target: 'ex:2b9f938_83e431b',
          label : 'used'
        }
      },
      {
        data: {
          source: 'ex:33d96d2363e5acbf8e2f39f0bbc8a7df',
          target: 'ex:39e1a4a_350c36f',
          label : 'used'
        }
      },
      {
        data: {
          source: 'ex:33d96d2363e5acbf8e2f39f0bbc8a7df',
          target: 'ex:828d16b_5d04b09',
          label : 'used'
        }
      },
      {
        data: {
          source: 'ex:33d96d2363e5acbf8e2f39f0bbc8a7df',
          target: 'ex:fb69af1_90653fc',
          label : 'used'
        }
      },
      {
        data: {
          source: 'ex:33d96d2363e5acbf8e2f39f0bbc8a7df',
          target: 'ex:9cbfabe_7f717cc',
          label : 'used'
        }
      },
      {
        data: {
          source: 'ex:33d96d2363e5acbf8e2f39f0bbc8a7df',
          target: 'ex:acdc365_b511593',
          label : 'used'
        }
      },
      {
        data: {
          source: 'ex:33d96d2363e5acbf8e2f39f0bbc8a7df',
          target: 'ex:49e404b_67c45d0',
          label : 'used'
        }
      },
      {
        data: {
          source: 'ex:e5c2f82acf8ee54d6a26998f267db67f',
          target: 'ex:49e404b_67c45d0',
          label : 'used'
        }
      },
      {
        data: {
          source: 'ex:fbbc22625b27e35efbec66b9fd2feba9',
          target: 'ex:5026e85_3966a98',
          label : 'used'
        }
      },
      {
        data: {
          source: 'ex:fbbc22625b27e35efbec66b9fd2feba9',
          target: 'ex:20faa8b_83f0c6f',
          label : 'used'
        }
      },
      {
        data: {
          source: 'ex:fbbc22625b27e35efbec66b9fd2feba9',
          target: 'ex:fcdb9d1_dd8c630',
          label : 'used'
        }
      },
      {
        data: {
          source: 'ex:fbbc22625b27e35efbec66b9fd2feba9',
          target: 'ex:2459d01_8550dbb',
          label : 'used'
        }
      },
      {
        data: {
          source: 'ex:fbbc22625b27e35efbec66b9fd2feba9',
          target: 'ex:5026e85_021684b',
          label : 'used'
        }
      },
      {
        data: {
          source: 'ex:fbbc22625b27e35efbec66b9fd2feba9',
          target: 'ex:4fd777a_e5ba483',
          label : 'used'
        }
      },
      {
        data: {
          source: 'ex:fbbc22625b27e35efbec66b9fd2feba9',
          target: 'ex:4d3ee73_447ce66',
          label : 'used'
        }
      },
      {
        data: {
          source: 'ex:fbbc22625b27e35efbec66b9fd2feba9',
          target: 'ex:f1c78b0_5291ffb',
          label : 'used'
        }
      },
      {
        data: {
          source: 'ex:fbbc22625b27e35efbec66b9fd2feba9',
          target: 'ex:fa084e7_73f9a85',
          label : 'used'
        }
      },
      {
        data: {
          source: 'ex:fbbc22625b27e35efbec66b9fd2feba9',
          target: 'ex:7dfc1ce_119220a',
          label : 'used'
        }
      },
      {
        data: {
          source: 'ex:fbbc22625b27e35efbec66b9fd2feba9',
          target: 'ex:e9b09fd_9130288',
          label : 'used'
        }
      },

      /**
       * Generation
       */

      {
        data: {
          source: 'ex:9084b10_b778324',
          target: 'ex:d17fab357a9218b3e4e78fe1b4a07861',
          label : 'wasGeneratedBy'
        }
      },
      {
        data: {
          source: 'ex:e3f6905_dcda968',
          target: 'ex:d17fab357a9218b3e4e78fe1b4a07861',
          label : 'wasGeneratedBy'
        }
      },
      {
        data: {
          source: 'ex:6fa36a5_ee98019',
          target: 'ex:d17fab357a9218b3e4e78fe1b4a07861',
          label : 'wasGeneratedBy'
        }
      },
      {
        data: {
          source: 'ex:90c507c_b60532b',
          target: 'ex:d17fab357a9218b3e4e78fe1b4a07861',
          label : 'wasGeneratedBy'
        }
      },
      {
        data: {
          source: 'ex:e3f6905_fe96b5d',
          target: 'ex:d17fab357a9218b3e4e78fe1b4a07861',
          label : 'wasGeneratedBy'
        }
      },
      {
        data: {
          source: 'ex:7a79a91_35ab8e6',
          target: 'ex:d17fab357a9218b3e4e78fe1b4a07861',
          label : 'wasGeneratedBy'
        }
      },
      {
        data: {
          source: 'ex:5f1a28f_b788de0',
          target: 'ex:d17fab357a9218b3e4e78fe1b4a07861',
          label : 'wasGeneratedBy'
        }
      },
      {
        data: {
          source: 'ex:7f563eb_a6b5a2a',
          target: 'ex:d17fab357a9218b3e4e78fe1b4a07861',
          label : 'wasGeneratedBy'
        }
      },
      {
        data: {
          source: 'ex:3030491_c19ec2d',
          target: 'ex:d17fab357a9218b3e4e78fe1b4a07861',
          label : 'wasGeneratedBy'
        }
      },
      {
        data: {
          source: 'ex:d4a0962_59a5251',
          target: 'ex:d17fab357a9218b3e4e78fe1b4a07861',
          label : 'wasGeneratedBy'
        }
      },
      {
        data: {
          source: 'ex:2b9f938_83e431b',
          target: 'ex:d17fab357a9218b3e4e78fe1b4a07861',
          label : 'wasGeneratedBy'
        }
      },
      {
        data: {
          source: 'ex:39e1a4a_350c36f',
          target: 'ex:d17fab357a9218b3e4e78fe1b4a07861',
          label : 'wasGeneratedBy'
        }
      },
      {
        data: {
          source: 'ex:828d16b_5d04b09',
          target: 'ex:d17fab357a9218b3e4e78fe1b4a07861',
          label : 'wasGeneratedBy'
        }
      },
      {
        data: {
          source: 'ex:fb69af1_90653fc',
          target: 'ex:d17fab357a9218b3e4e78fe1b4a07861',
          label : 'wasGeneratedBy'
        }
      },
      {
        data: {
          source: 'ex:9cbfabe_7f717cc',
          target: 'ex:d17fab357a9218b3e4e78fe1b4a07861',
          label : 'wasGeneratedBy'
        }
      },
      {
        data: {
          source: 'ex:acdc365_b511593',
          target: 'ex:d17fab357a9218b3e4e78fe1b4a07861',
          label : 'wasGeneratedBy'
        }
      },
      {
        data: {
          source: 'ex:5026e85_3966a98',
          target: 'ex:33d96d2363e5acbf8e2f39f0bbc8a7df',
          label : 'wasGeneratedBy'
        }
      },
      {
        data: {
          source: 'ex:20faa8b_83f0c6f',
          target: 'ex:33d96d2363e5acbf8e2f39f0bbc8a7df',
          label : 'wasGeneratedBy'
        }
      },
      {
        data: {
          source: 'ex:fcdb9d1_dd8c630',
          target: 'ex:33d96d2363e5acbf8e2f39f0bbc8a7df',
          label : 'wasGeneratedBy'
        }
      },
      {
        data: {
          source: 'ex:2459d01_8550dbb',
          target: 'ex:33d96d2363e5acbf8e2f39f0bbc8a7df',
          label : 'wasGeneratedBy'
        }
      },
      {
        data: {
          source: 'ex:5026e85_021684b',
          target: 'ex:33d96d2363e5acbf8e2f39f0bbc8a7df',
          label : 'wasGeneratedBy'
        }
      },
      {
        data: {
          source: 'ex:4fd777a_e5ba483',
          target: 'ex:33d96d2363e5acbf8e2f39f0bbc8a7df',
          label : 'wasGeneratedBy'
        }
      },
      {
        data: {
          source: 'ex:4d3ee73_447ce66',
          target: 'ex:33d96d2363e5acbf8e2f39f0bbc8a7df',
          label : 'wasGeneratedBy'
        }
      },
      {
        data: {
          source: 'ex:f1c78b0_5291ffb',
          target: 'ex:33d96d2363e5acbf8e2f39f0bbc8a7df',
          label : 'wasGeneratedBy'
        }
      },
      {
        data: {
          source: 'ex:fa084e7_73f9a85',
          target: 'ex:33d96d2363e5acbf8e2f39f0bbc8a7df',
          label : 'wasGeneratedBy'
        }
      },
      {
        data: {
          source: 'ex:7dfc1ce_119220a',
          target: 'ex:33d96d2363e5acbf8e2f39f0bbc8a7df',
          label : 'wasGeneratedBy'
        }
      },
      {
        data: {
          source: 'ex:e9b09fd_9130288',
          target: 'ex:33d96d2363e5acbf8e2f39f0bbc8a7df',
          label : 'wasGeneratedBy'
        }
      },
      {
        data: {
          source: 'ex:86d7ca8_0af3cce',
          target: 'ex:e5c2f82acf8ee54d6a26998f267db67f',
          label : 'wasGeneratedBy'
        }
      },
      {
        data: {
          source: 'ex:6dffe0d_2d4e363',
          target: 'ex:e5c2f82acf8ee54d6a26998f267db67f',
          label : 'wasGeneratedBy'
        }
      },
      {
        data: {
          source: 'ex:d57f045_8b7b3bd',
          target: 'ex:e5c2f82acf8ee54d6a26998f267db67f',
          label : 'wasGeneratedBy'
        }
      },
      {
        data: {
          source: 'ex:5ece87a_3fea3af',
          target: 'ex:e5c2f82acf8ee54d6a26998f267db67f',
          label : 'wasGeneratedBy'
        }
      },
      {
        data: {
          source: 'ex:8655f96_a814b49',
          target: 'ex:fbbc22625b27e35efbec66b9fd2feba9',
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

cy.center()
cy.fit()