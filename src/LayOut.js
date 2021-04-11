import React from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MySvg1 from './MySvg1'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import AutorenewTwoToneIcon from '@material-ui/icons/AutorenewTwoTone';

class LayOut extends React.Component{
    render(){
        return( <>
                    <div className="container border border-dark">
                        <div className="row">
                            <div className="item1 col-6 d-flex align-items-center">
                                <p className="mb-auto mt-auto">Pomodoro Timer</p>
                            </div>
                            <div className="col-6 d-flex justify-content-around align-items-center">
                                <MySvg1 width="100px" height="140px"/>
                            </div>
                            <div className="item3 col-12">
                                <h3>Time Tracking</h3>
                            </div>
                            <div className="item4 col-3">
                                <h1>03:56</h1>
                            </div>
                            <div className="item5 col-3">
                                <PlayCircleOutlineIcon/>
                            </div>
                            </div>
                            <div className="item7 col-3">
                                <PauseCircleOutlineIcon/>
                            </div>
                            <div className="item8 col-3">
                                <AutorenewTwoToneIcon/>
                            </div>
                        </div> 
            </>
        )
    }
}

export default LayOut;