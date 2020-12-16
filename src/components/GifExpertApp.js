import React, {useState} from 'react';
import {AddCategory} from './AddCategory.js'
import {GifGrid} from './GifGrid.js'

export const GifExpertApp = () =>{
    // const categories= ['One puch', 'Samurai X', 'Draagon Ball'];
    const [categories, setCategories] = useState(['One puch'])

    // const handleAdd= ()=>{
    // //    setCategories([ 'HunterxHunter', ...categories]);
    // setCategories(cats =>[...cats, "Rody Gaaa"]);
    // }
    
    return (<>
                <h2>GifExpertApp</h2>
                <AddCategory setCategories={setCategories}/>
                <hr/>
           
                <ol>
                    {
                        categories.map((category, i) => 
                            <GifGrid 
                                key={ category }
                                category={ category }
                            />
                        )
                    }
                </ol>
            </>
        )
}

