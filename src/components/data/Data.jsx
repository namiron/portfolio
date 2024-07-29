import React from 'react'
import { dataForMyWork } from '../common/constants';
import styleContent from './styles/data.module.scss'


const Data = ({ rotateX, rotateY }) => {

    //-------------------------------------------
    const [descr, setDescr] = React.useState('');
    const [isExiting, setIsExiting] = React.useState(false);

    const descriptionForMyWorks = () => {
        if (rotateX === -100 && rotateY === 20) {
            return dataForMyWork.sueno;
        } else if (rotateX === 85 && rotateY === 10) {
            return dataForMyWork.safari;
        } else if (rotateX === -5 && rotateY === 10) {
            return dataForMyWork.timer;
        } else if (rotateX === -5 && rotateY === 100) {
            return dataForMyWork.cloudStore;
        } else if (rotateX === -10 && rotateY === -70) {
            return dataForMyWork.onlineChat;
        } else if (rotateX === 170 && rotateY === 20) {
            return dataForMyWork.quiz;
        } else {
            return '';
        }
    };

    React.useEffect(() => {
        setIsExiting(true);
        const timeout = setTimeout(() => {
            setDescr(descriptionForMyWorks());
            setIsExiting(false);
        }, 500);

        return () => clearTimeout(timeout);
    }, [rotateX, rotateY]);
    //-------------------------------------------

    return (
        <div className={styleContent.content}>
            <div className={styleContent.container}>
                <p className={`${styleContent.description} ${isExiting ? styleContent.exiting : ''}`}
                    dangerouslySetInnerHTML={{ __html: descr }}>
                </p>
            </div>
        </div>
    );
};

export default Data;
