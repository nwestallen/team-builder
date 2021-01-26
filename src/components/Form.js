//Form component
import React, { useState, useEffect } from 'react';
import sytled from 'styled-components';

const Form = (props) => {
    return (
        <form>
            <label for='nameInput'>Name: </label>
            <input type='text' id='nameInput' />
        </form>
    )
}

export default Form;