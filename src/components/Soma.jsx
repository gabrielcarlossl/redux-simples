import React from "react";

import Card from "./Card";

export default props =>{
    const {min, max} = props
    return (
        
        <Card title='Soma dos Números' Red>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>
                        {min + max}
                    </strong>
                </span>
            </div>
        </Card>
    )
}