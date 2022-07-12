import React from "react";

const MySelect = ({option, defaultValue, value, onChange} ) => {
     option=[
       {value:'title',name: 'Title'},
       {value:'body',name: 'Message'}
   ];
   defaultValue="Sort"
    return(
        <select
        onChange={event => onChange(event.target.value)}
        value={value}
        >
            <option  value="">{defaultValue}</option>
            {option?.map((options) =>
                <option  key={options.value} value={options.value}>{options.name}</option>
                )}
        </select>
    )
}
export default MySelect;