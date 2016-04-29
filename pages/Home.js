import React from 'react';
import Article from "../components/Article";



class Home extends React.Component {
   
    render() {
       
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

export default Home;