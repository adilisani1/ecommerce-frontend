import React, { useContext } from 'react'
import './Darkmode.css';
import { ThemeContext } from '../../context/ThemeProvider';

const DarkMode = () => {
    const { mode, toggle } = useContext(ThemeContext);
    return (
        <div className="form-check " >
            <input
                className="form-check-input"
                type="checkbox"
                id="checkbox"
                onClick={toggle}
            />
            <label className="form-check-label" htmlFor="checkbox">
                <i className="moon ri-moon-fill"></i>
                <i className="sun ri-sun-fill"></i>
                <span
                    className='ball'
                    style={
                        mode === "light" ?
                            { left: "28px", transition: "all 0.3s ease;" }
                            :
                            { right: "4px", transition: "all 0.3s ease;" }}>
                </span>
            </label>
        </div>

    )
}

export default DarkMode