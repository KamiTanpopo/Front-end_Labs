import React from 'react'

export class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {backgroundColor: "white"};
    }
    
    render() {
        return (<>
            <p>
                Освіта: <br/>
                ШНВК:спеціалізована школа I-II ступенів - ліцей <br/>
                КПІ ім. Ігоря Сікорського 
            </p>

            <p>Хобі:</p>
            <ul>
                <li>Співи</li>
                <li>Плавання</li>
                <li>Танці</li>
                <li>Музика</li>
                <li>Комедія</li>
            </ul>

            <p>Улюблені книги та фільми:</p>
            <ol>
                <li>Той, що біжить лабіринтом</li>
                <li>Код да Вінчі</li>
                <li>Шрек</li>
            </ol>

            <p> Найвподобаніше місто: <br/></p>
            <p>
                Львів — місто з особливою атмосферою, яким більш ніж пів тисячоліття правили королі.
                Це місто кави, місто тисячі левів, місто джазу, дощу, шоколаду, терас і пристрасного 
                танго. Усі ці невеличкі радості життя встигли перерости у традиції для кожного львів’янина.
            </p>
        </>);
    }
}