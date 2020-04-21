import React from 'react';


const LanguageList = (props) => {
console.log(props)
const mylang = props.langdata.map((data) => {
return(
    <div key={data.id}>
        <h3>{data.title}</h3>
        <div>
            {data.feed}
        </div>
    </div>
)

})
return(

    <div>
        {mylang}
    </div>
)


}


export default LanguageList;