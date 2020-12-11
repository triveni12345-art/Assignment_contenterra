import React from 'react'
import {UserContext,CodeContext} from '../App'

function ComF(){
    
return( 
<div>
<UserContext.Consumer>
    {cyan=>{
        return(
            <CodeContext.Consumer>
                {code=>{
                    return<div>Color{cyan},and Code is{code}</div>
                }

                }
            </CodeContext.Consumer>
        )
    }

    }
</UserContext.Consumer>

</div>
)
}
export default ComF