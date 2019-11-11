import React from 'react';
import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import ruLocale  from 'date-fns/locale/ru'
import classNames from 'classnames';
import checkedSvg from 'assets/img/checked.svg';


import './Message.scss';

const Message = ({ avatar, text, date, user, isMe }) =>(
    <div className={classNames('message', {'message  isme': isMe})}>
        
        <div className="message__content">
            <img src={checkedSvg} alt="Checked icon"></img>
            <div className="message__avatar">
                <img src={avatar} alt={`Avatar ${user.fullname}`}/>
            </div>
            <div className="message__bubble">
                <p className="message__text" >{ text }</p>
            </div>
            <span className="message__date">{ formatDistanceToNow( new Date(2019, 10, 10, 22), {addSuffix: true, locale: ruLocale} ) }</span>
        </div>
    </div>
);

Message.defaultProps = {
    user: {}
};

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.object
};

export default Message;