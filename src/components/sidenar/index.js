import React, { useState } from 'react';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
      <div>

      </div>
  )
}

export default Navbar;