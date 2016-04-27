import React from 'react';
import Article from "../components/Article";
//import TodoStore from "../stores/TodoStore";


class Featured extends React.Component {
    constructor() {
        super();
        /*
        this.state = {
            todos: TodoStore.getAll();
        };
        */
    }
    
    render() {
        const {todos}=this.state;
        const TodoComponents=todos.map((todo)=>{
            return <Todo key={todo.id}{...todo}/>
        });
        
        
        
        
        const Articles = [
            "Some Article",
            "Some Other Article",
            "Yet Another Article",
            "Still More"
        ].map((title, i) => <Article key={i} title={title}/>);
        /*
        const Articles=[
            <Article key={1} title={'some title'}/>,
            <Article key={2} title={'some title'}/>,
            <Article key={3} title={'some title'}/>,
            <Article key={4} title={'some title'}/>,
            <Article key={5} title={'some title'}/>
        ];
        */
        const adText = [
            "Ad spot #1",
            "Ad spot #2",
            "Ad spot #3",
            "Ad spot #4",
            "Ad spot #5"
        ];
        const randomAd = adText[Math.random() * (adText.length - 1)];
        return (
            <div>
            <h1>Todos</h1>
            <ul>{TodoComponents}</ul>
            </div>
            
            
            <div>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='well text-center'>
                            {randomAd}
                        </div>
                    </div>
                </div>
                <div className='row'>{Articles}</div>
            </div>
        );
    }
};

export default Featured;