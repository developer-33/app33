
import { CLink } from "@coreui/react";
import {CFooter} from '@coreui/react';
function Footer ()  {
  return (
    
   <CFooter>
  <div>
    <CLink href="ht">CoreUI</CLink>
    <span>&copy; 2024 creativeLabs.</span>
  </div>
  <div>
    <span>Powered by</span>
    <CLink href="https://coreui.io">Burto nCreations</CLink>
  </div>
</CFooter>

  )
}

export default Footer