import React, {useState, useEffect} from 'react';
import chroma from 'chroma-js';

//import { colourOptions } from '../data';
import Select from 'react-select';

const colourStyles = {
    //#3e3440
  control: styles => ({ ...styles, backgroundColor: '#3e3440' }),
  menu: styles =>({ ...styles, backgroundColor: '#3e3440'}),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : null,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? chroma.contrast(color, '#3e3440') > 2
          ? '#3e3440'
          : 'black'
        : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
      },
    };
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ':hover': {
      backgroundColor: data.color,
      color: 'white',
    },
  }),
};

function Selector(props) {
    const [options, setOptions] = useState();
    const [loading, setLoading] = useState();
    useEffect(() => {
        setOptions(props.colourOptions);
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
    }, [props.colourOptions]);
    //if (!options) return null;
    return(
        <Select
            closeMenuOnSelect={false}
            //defaultValue={[props.colourOptions[0], props.colourOptions[1]]}
            isMulti
            options={options}
            styles={colourStyles}
            onChange={props.handleChange}
            isLoading={loading}
        />
)};

export default Selector