/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    {
      type: 'doc',
      label: 'Welcome',
      id: 'welcome',
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        {
          type: 'doc',
          label: 'Overview',
          id: 'tutorial/readme',
        },
        {
          type: 'doc',
          label: 'The Solo Package',
          id: 'tutorial/01',
        },
        {
          type: 'doc',
          label: 'Tokens and the UTXO Ledger',
          id: 'tutorial/02',
        },
        {
          type: 'doc',
          label: 'Creating a Chain; Core Contracts',
          id: 'tutorial/03',
        },
        {
          type: 'doc',
          label: 'Deploying and Running a Rust Smart Contract',
          id: 'tutorial/04',
        },
        {
          type: 'doc',
          label: 'Structure of the Smart Contract',
          id: 'tutorial/05',
        },
        {
          type: 'doc',
          label: 'Sending a Request',
          id: 'tutorial/06',
        },
        {
          type: 'doc',
          label: 'Calling a View',
          id: 'tutorial/07',
        },
        {
          type: 'doc',
          label: 'Deposit and Withdraw Tokens',
          id: 'tutorial/08',
        },
        {
          type: 'doc',
          label: 'Sending Tokens to a Smart Contract',
          id: 'tutorial/09',
        },
        {
          type: 'doc',
          label: 'Return Of Tokens in Case of Failure',
          id: 'tutorial/10',
        },
        {
          type: 'doc',
          label: 'Sending Tokens from a Smart Contract',
          id: 'tutorial/11',
        },
        {
          type: 'doc',
          label: 'ISCP On-Chain Accounts',
          id: 'tutorial/12',
        },
      ],
    },
    {
      type: 'category',
      label: 'Core Contracts',
      items:
      [
        {
          type: 'doc',
          label: 'Overview',
          id: 'contract_core/overview',
        },
        {
          type: 'doc',
          label: 'Root Contract',
          id: 'contract_core/root',
        },
        {
          type: 'doc',
          label: 'Account Contract',
          id: 'contract_core/accounts',
        },
        {
          type: 'doc',
          label: 'Blob Contract',
          id: 'contract_core/blob',
        },
        {
          type: 'doc',
          label: 'Blocklog Contract',
          id: 'contract_core/blocklog',
        },
        {
          type: 'doc',
          label: 'Governance Contract',
          id: 'contract_core/governance',
        },
        {
          type: 'doc',
          label: 'Default Contract',
          id: 'contract_core/default',
        },
      ],
    },
    {
      type: 'category',
      label: 'Miscellaneous',
      items:
      [
        {
          type: 'doc',
          label: 'Run a Node',
          id: 'misc/runwasp',
        },
        {
          type: 'doc',
          label: 'Deploy with Wasp-CLI',
          id: 'misc/deploy',
        },
        {
          type: 'doc',
          label: 'Install',
          id: 'misc/install',
        },
        {
          type: 'doc',
          label: 'Invoke',
          id: 'misc/invoking',
        },
        {
          type: 'doc',
          label: 'UTXO Ledger',
          id: 'misc/utxo',
        },
        {
          type: 'doc',
          label: 'Core Types',
          id: 'misc/coretypes',
        },
        {
          type: 'doc',
          label: 'On-Chain Accounts',
          id: 'misc/accounts',
        },
        {
          type: 'doc',
          label: 'Wasp Publisher',
          id: 'misc/publisher',
        },
      ],
    },
    {
      type: 'doc',
      label: 'Contribute',
      id: 'contribute',
    },
  ],
};
