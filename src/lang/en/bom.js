let bom = {
  up: {
    tit: "Upload BOM File ",
    des: "Drag BOM file to this box to get a quote in 10 seconds ",

    tips: "Support.XLSX.XLS. CSV format file, no more than 2M",
    safeTip:
      "Will keep your documents confidential and protect your intellectual property rights ",
  },

  title: "Ai Intelligent BOM Cost Analysis Tool",
  sec1: {
    tit: "Cost accounting ",
    div1: "Quickly Estimate Product Proofing Material Costs ",
    div2: "Device material batch selection, supplier spot price comparison ",
    div3: "Docking with 160 regular suppliers to provide 200 million parts spot inventory quotation ",
  },
  sec2: {
    tit: "Alternative Selection ",
    div1: "Offer alternative device solutions to reduce procurement costs ",
    div2: "Discontinued materials replacement selection, 12,000 product library for selection ",
    div3: "AI Big Data Recommendation, 10 Million Alternative device Relationship Library ",
  },
  sec3: {
    tit: "Risk Aversion ",
    div1: "Component life cycle warning, avoid production risk ",
    div2: "Component supply chain risk warning, avoid procurement risks ",
    div3: "BOM intelligent comparative analysis to avoid quantity, Designator and packaging errors ",
  },
  bottom: {
    tit1: "BOM based on component big data depth algorithm ",
    tit2: "BOM Part Number big data matching, so that you choose more accurate, more efficient procurement",
    btn: "Upload BOM File, match supplier's lowest price in 10 seconds ",
  },

  sheelModel: {
    title: "Please confirm the Sheet to be parsed ",
    message:
      "The file currently uploaded has multiple sheets. Please select the sheet you want to parse. 10 seconds Quick quote ",
    label: "Sheet name ",
    button: "OK ",
  },

  setNumberModel: {
    title: "Quantity of BOM Purchasing",
    label: "BOM Purchasing Quantity (pcs)",
    label2: "Parts Procurement Options",
    tooltip: "Please select whether your components are sourced or supplied",
    message:
      "Selecting the purchase will change to a pcba type order. Order pcba, there will be a large discount ",
    button: "OK ",
  },

  // Progress bar
  progress: {
    progress1: "Match progress",
    progress2: `PIN resolution rate`,
    progress3: "Matched material",
    progress4: "Number of models",
    progress5: "No matching material ",
    unit: "",
    msg: "BOM file ({0}),successful match ({1}),to determine the Part Number ({2}), not exactly match ({3})",
  },
  unit: "",
  submit: {
    button: "Submit order ",
    warnning: "Price subject to review ",
  },
  tab: {
    tab1: "All ",
    tab2: "Exact match ",
    tab3: "Part Number to be determined ",
    tab4: "No match ",
    rightMsg: "BOM file type ",
    rightMsg2: "Quoted Part Number ",
  },
  table: {
    btn: {
      delete: "Delete ",
      edit: `Edit`,
      confirm: `Confirm`,
      change: "Change",
    },
    head: {
      index: `S/N`,
      col1: "Original Query",
      col2: "Required Part Number & Description",
      col3: "Designator",
      col4: "Qty",
      col5: "Build Qty",
      col6: "Spare Parts Qty",
      col7: "Results",
      col8: "Matched Part Number & Description",
      col9: "Matched Brand",
      col10: "Line Total",
      col11: "Lead Time(days)",
      col12: "Operation",
      col13: "Source of Material", //
    },
    body: {
      PartNumber: "Part Number",
      Brand: "Brand",
      Encapsulates: "Footprint",
      Parameters: "Value",
      Description: "Description",

      status1: "Successful",
      status2: "Part Number to be confirmed",
      status3: "No match result",
      loading: "Matching",
      nodata: "No matching data",
    },
  },

  // 物料来源
  BomSourceType: {
    option1: "SCSPCBA",
    option2: "Customer",
    option3: "Do Not Populate",
  },

  // Replace the model
  changeModal: {
    title: "Replacement model",
    label: "Required Model",
    head: {
      col1: "Part Number",
      col2: "Parameters",
      col3: "Brand",
      col4: "Footprint",
      col5: "Designator",
      col6: "Dosage",
      col7: "Total",
    },
    head2: {
      col1: "Alternative Model",
      col2: "Specifications",
      col3: "Price",
      col3_1: "Quantity",
      col3_2: "unit price",
      col3_3: "Price Reference",

      col4: "Operation",
    },
    active1: "Current",
    active2: "Select",
  },

  // Modify the model
  editModal: {
    title: "Modify Requirements",
    message:
      "Prompt: Multiple parameters and bit numbers, please separate with English commas",
  },

  // Parse the description
  analysisMsg: {
    msg0: "Upload file",
    msg1: "Prepare BOM analysis",
    msg2: "AI parsing...",
    msg3: "Start analyzing BOM intelligently",
    msg4: "BOM intelligent analysis completed",
  },
};

export default {
  bom,
};
