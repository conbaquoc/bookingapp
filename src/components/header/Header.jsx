import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState } from 'react';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

export const Header = ({ type }) => {
    const [openDate, setOpenDate] = useState(false);
    const [destination, setDestination] = useState('');

    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        },
    ]);

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    const navigate = useNavigate();

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
            };
        });
    };

    const handleSearch = () => {
        navigate('/hotels', { state: { destination, date, options } });
    };

    return (
        <div className="header">
            <div className={type === 'list' ? 'headerContainer listMode' : 'headerContainer'}>
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
                {type !== 'list' && (
                    <>
                        {' '}
                        <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
                        <p className="headerDesc">
                            Get reward for your travel - unlock instant savings of 10% or more with a free SuaUbooking
                            account
                        </p>
                        <button className="headerBtn">Sign in / Register</button>
                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <FontAwesomeIcon className="headerIcon" icon={faBed} />
                                <input
                                    type="text"
                                    placeholder="Where are you going?"
                                    className="headerSearchInput"
                                    onChange={(e) => setDestination(e.target.value)}
                                />
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon className="headerIcon" icon={faCalendarDays} />
                                <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">{`${format(
                                    date[0].startDate,
                                    'MM/dd/yyyy',
                                )} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
                                {openDate && (
                                    <DateRange
                                        editableDateInputs={true}
                                        onChange={(item) => setDate([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        ranges={date}
                                        className="date"
                                        minDate={new Date()}
                                    />
                                )}
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon className="headerIcon" icon={faPerson} />
                                <span
                                    onClick={() => setOpenOptions(!openOptions)}
                                    className="headerSearchText"
                                >{`${options.adult} adult ~ ${options.children} children ~ ${options.room} room`}</span>
                                {openOptions && (
                                    <div className="options">
                                        <div className="optionItem">
                                            <span className="optionText">Adult</span>
                                            <div className="optionCounter">
                                                <button
                                                    disabled={options.adult <= 1}
                                                    className="optionCounterBtn"
                                                    onClick={() => handleOption('adult', 'd')}
                                                >
                                                    -
                                                </button>
                                                <span className="optionCounterNumber">{options.adult}</span>
                                                <button
                                                    className="optionCounterBtn"
                                                    onClick={() => handleOption('adult', 'i')}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className="optionItem">
                                            <span className="optionText">Children</span>
                                            <div className="optionCounter">
                                                <button
                                                    disabled={options.children <= 0}
                                                    className="optionCounterBtn"
                                                    onClick={() => handleOption('children', 'd')}
                                                >
                                                    -
                                                </button>
                                                <span className="optionCounterNumber">{options.children}</span>
                                                <button
                                                    className="optionCounterBtn"
                                                    onClick={() => handleOption('children', 'i')}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className="optionItem">
                                            <span className="optionText">Room</span>
                                            <div className="optionCounter">
                                                <button
                                                    disabled={options.room <= 1}
                                                    className="optionCounterBtn"
                                                    onClick={() => handleOption('room', 'd')}
                                                >
                                                    -
                                                </button>
                                                <span className="optionCounterNumber">{options.room}</span>
                                                <button
                                                    className="optionCounterBtn"
                                                    onClick={() => handleOption('room', 'i')}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="headerSearchItem">
                                <button className="headerBtn" onClick={handleSearch}>
                                    Search
                                </button>
                            </div>
                        </div>{' '}
                    </>
                )}
            </div>
        </div>
    );
};