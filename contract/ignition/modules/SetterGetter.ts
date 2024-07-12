import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const SetterModule = buildModule("SetterModule", (m) => {
  
  const contract = m.contract("SetterGetter");

  return { contract };
});

export default SetterModule;
