import React, { Children } from 'react'

type Props = {
  active: any;
  selectTab: any;
  children: any;
}


const TabButton = ({active, selectTab, children}: Props) => {
const buttonClasses = active ?  'text-white border-b border-purple-500' : 'text-[#ADB7BE]'

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton