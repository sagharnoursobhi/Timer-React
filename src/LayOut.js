import React from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MySVg4 from './MySvg4'
import MySvg5 from './MySvg5'
import MySvg3 from './MySvg3'
import MySvg2 from './MySvg2'
import MySvg1 from './MySvg1'
import Icon from '@material-ui/core/Icon';
class LayOut extends React.Component{
    render(){
        return( <>
                    <div className="container border border-dark">
                        <div className="row">
                            <div className="item1 col-6 d-flex align-items-center">
                                <p className="mb-auto mt-auto text-white">Pomodoro Timer</p>
                            </div>
                            <div className="item2 col-6 d-flex justify-content-around align-items-center">
                                <MySvg1/>
                            </div>
                            <div className="item3 col-12">
                                <h3 className="text-white">Time Tracking</h3>
                            </div>
                            <div className="item4 col-12 ">
                                <div className="col-2 d-flex justify-content-center align-items-center"><input type="number" name="hour" placeholder="enter hours"/></div>
                                <div className="col-2 d-flex justify-content-center align-items-center"><input type="number" name="hour" placeholder="enter minutes"/></div>
                                <div className="col-2 d-flex justify-content-center align-items-center"><input type="number" name="hour" placeholder="enter seconds"/></div>
                            </div>
                        </div>
                        <div className="row margin">
                            <div className="item5 col-3 extra">
                                <MySvg2/>
                            </div>
                            <div className="item6 col-3 extra">
                                <MySvg3/>
                            </div>
                            <div className="item7 col-3 extra">
                                <MySVg4/>
                            </div>
                            <div className="item8 col-3 extra">
                                <MySvg5/>
                            </div>
                        </div>
                    </div> 
            </>
        )
    }
}

export default LayOut;