export let pcbFormDes = {
  boardMaterialType: `Refers to the plate manufacturers and the highest grade of sheet material, plate insulation, uniformity, impedance stability and the reliability of copper and sheet material substrate, far higher than similar products in the B, C grade material, can be used to produce absolutely demanding military electronic supplies! Low-grade plate B, C-grade material: plate manufacturers, because of the low-cost needs of circuit board manufacturers and the production of board material, plate manufacturers in the manufacturing process, shoddy, jersey-cut, its performance stability is far less than the military-grade A-grade material, and the price is far lower than A-grade material`,
  boardLayer: `The number of sub-layers provided by the polyplate is selected: 1 is a single panel, 2 is a double panel, 4 is a four-layer board, 6 is a six-layer board, and the larger the number of layers, the higher the corresponding cost. Note: In order to work efficiency, the template is basically patchwork production, a part of the single panel will be combined with the double panel production, that is, the single panel is produced by the double panel process, there will be copper in the hole but will not affect the performance, and the reliable performance is higher. If the design of the circuit board is a single-sided line, to do the effect of copper in the hole, choose two panels when casting. PS: The proofing cost of single panel and double panel is similar.`,
  mergeBoard_num: `The number of pieces refers to the same file contains several different boards, charging a combined fee, if it is the same board is not charged a combined fee. Mosaic division: stamp holes in the middle of the circuit board, slotting, V cutting, and direct milling are all counted as Mosaic.`,
  shipmentMode: `Irregular, circular PCBs, or PCBs with dimensions smaller than 10*10CM board, whether it is manual welding or machine patch, small batch production orders, we are recommended to assemble the shipment, after the assembly can improve welding efficiency and reduce welding processing costs. The specific assembly method can be determined according to the process requirements of the SMT processing plant. You can also consult the customer service staff, we will give the most reasonable advice.`,
  //   mergeBoard_Rule: "拼板规则",
  boardTitle1: `The size of the board refers to the length and width of the customer's single board, if it is a circular board, the length and width size is the diameter of the circle; If it is a circuit board with irregular shape, the length and width dimensions are measured according to the maximum shape range; Note: A variety of circuit boards play a compression package, do not know how much size after the assembly, the length and width can be filled in a size, the board staff will be calculated according to the size of the single board after the assembly. The size of the board has a tolerance range, and the normal tolerance of the shape is ±0.2mmAround; If there are other requirements for contour tolerances, please note in the other requirements. If there are no comments, it is deemed to agree with the published tolerances. The shape must be designed in the same layer, that is, keep out layer or mechanical layer, do not design in two layers separately, otherwise it is easy to make mistakes. If you are not clear, please consult the staff.`,

  BoardThickness: `BoardThickness refers to the thickness of the circuit board, which explains the tolerance of the board thickness. The company uses KB military A-grade material, the tolerance is relatively small, and the normal plate thickness is about 10%; 10% is mainly caused by seal resistance welding and copper sinking; If there are other requirements for plate thickness tolerance, please note in other requirements, otherwise it is considered as normal plate thickness tolerance. Note: The selection of plate thickness is also related to the price, 0.6-1.6 is the price of normal plate thickness, and the price of 0.4 and 2.0 plate thickness is about 100 yuan higher than that of 0.6-1.6 normal plate thickness. `,

  SoldermaskColor:
    "Some special colors are charged a color fee, such as matte green, matte black and butter black or green oil black",

  SurfaceFinish: `Refers to the surface treatment of the circuit board, 1, the surface treatment of lead spray tin is not charged, lead-free spray tin is charged 20 yuan, sinking gold is charged 100 yuan; 2, in the actual operation process, choose to spray tin when placing the order, in order to efficiency and delivery time, a small part of the circuit board may be spelled in the production of gold plating, the cost of gold plating is much higher than the spray tin, and there is no problem in performance, if you do not accept this, please note in other requirements can not change the process.`,

  SoldermaskCover:
    "This is often controversial, highlighted. Now provide three kinds: (1) through the hole cover oil (2) through the hole opening window (3) gerber file according to the file processing, because gerber file, can not distinguish between the hole and the key hole, can only be processed according to the file; If the original file is provided, the hole has attributes that the factory will pay attention to when transferring the film file. If you are not clear, you can call the staff for consultation.",

  TestType:
    "Flying needle sampling does not charge a fee, the straight through rate of more than 95%, but only for relatively simple, line width and line distance is relatively large and sparse, the hole is relatively large board, choose flying needle sampling orders, will allow a certain proportion of defective products, please choose carefully",
  CharacterColor: "",
};

export let smtFormDes = {
  BomMaterialSource:
    "Please choose whether your components are purchased or supplied",
  PCBBoardSize:
    "Please fill in the pcb size of the patch, if it is a Mosaic, fill in the size after the Mosaic",
  PCBMergeBoardNumber:
    "The number of pieces of PCB material contained in each composition",
  ProductionNumber: "The total number of products you need to produce",
  SingleBoardSMTNumber:
    "The number of solder joints on a single plate, such as a patch resistor with two solder joints, even if two points",
  SingleBoardTHNumber:
    "The number of plug-in solder joints on a single board, the plug-in component has several feet, even a few points, such as a direct-inserted capacitor has two feet, even two points",
  MaterialTypeNumber: "BOM Specifies the component type in the BOM",
  ProcessRequirements: "Please confirm the type of solder paste used",
  PCBBoardType: "Please confirm your pcb board type",
  SeparateBoardShipment:
    "If the pcb is a patchwork patch, please confirm whether it is necessary to ship a single piece for you",
  BrushThreeProofPaint:
    "Three anti-paint has good resistance to high and low temperature; After curing, it forms a transparent protective film with superior insulation, moisture, leakage, shock, dust, corrosion, aging, corona resistance and other properties",

  ProgramBurn:
    "Program burning is to load the original program into the device after compiling and processing, and let the device execute the program burning",
  X_RaySetNumber:
    "Number of board materials to be checked by X-RAY multiplied by number of PCbas to be checked",
  PCBBoardSource: "Please choose whether your pcb is manufactured or supplied",
  TestInstrument:
    "Testing your pcb with tooling instruments may require you to inform the business of the test method",
  SteelMeshType:
    "Please select the type of steel mesh, the ladder steel mesh is made of two or more thicknesses on the same mesh board to achieve the welding needs of different components",
};
