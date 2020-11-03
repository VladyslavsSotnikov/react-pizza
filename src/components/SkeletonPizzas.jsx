import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonPizzas = (props) => (
    <div className='pizza-block'>
      <ContentLoader 
        speed={2}
        width={280}
        height={457}
        viewBox="0 0 280 457"
        backgroundColor="#dbdbdb"
        foregroundColor="#998f8f"
        {...props}
      >
        <circle cx="134" cy="125" r="114" /> 
        <rect x="74" y="258" rx="5" ry="5" width="123" height="26" /> 
        <rect x="6" y="301" rx="10" ry="10" width="273" height="84" /> 
        <rect x="13" y="422" rx="5" ry="5" width="92" height="28" /> 
        <rect x="123" y="413" rx="5" ry="5" width="151" height="44" />
      </ContentLoader>
    </div>
    )

export default SkeletonPizzas

