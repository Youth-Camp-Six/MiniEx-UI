import React, { memo, useEffect } from "react";
import classNames from "classnames";
import { TabsProps } from './type'

export const Tabs: React.FC<TabsProps> = (props) => {
    const { className, modelValue, options, width, itemWidth, round, type, ...restProps } = props

    const classes = classNames('mi-tabs', className, {
        [`mi-tabs-${type}`]: type,
        [`mi-badge-${round}`]: round,
    });

    let activeItemStyle = {}
    let v = modelValue
    let itemRef = [] as any
    const init = () => {
        let index = options.findIndex((e) => e.value == v);
        if (index < 0) { index = 0 }
        // var a = `{"width":"52px","transform": "translateX(3px)" }`
        // console.log(JSON.parse(a))
        activeItemStyle = JSON.parse(`{"width":"${itemRef[index].offsetWidth}px","transform": "translateX(${itemRef[index].offsetLeft}px)"}`);

        // console.log((activeItemStyle))
    };

    // const emit = defineEmits(['change', 'update:modelValue']);
    let curIndex = options.findIndex((e) => v == e.value);
    const setStyle = (value: string) => {
        let index = options.findIndex((e) => value == e.value);
        if (curIndex != index) {
            let _item = options[index];

            if (v != _item.value) {
                v = _item.value;
            }

            let activeRef = itemRef[index];
            activeItemStyle = `width:${activeRef.offsetWidth}px;transform: translate(${activeRef.offsetLeft}px);`;

            if (v != modelValue) {
                // emit('change', {
                //     label: _item.label,
                //     value: _item.value,
                //     activeIndex: index,
                // });
                // emit('update:modelValue', v);
            }
            curIndex = index;
        }
    };

    let timer: ReturnType<typeof setTimeout> | undefined;
    const debounce = () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            console.log(1);
            init();
        }, 250);
    };

    useEffect(() => {
        if (modelValue == '') {
            v = options[0].value;
        }
        init();
        window.addEventListener('resize', debounce, false);
        return () => {
            window.removeEventListener('resize', debounce);
        };
    }, [])

    return (
        <div className={classes} style={{ width: `${width}` }} {...restProps} >
            <div className="mi-tabs-item-animation-active" style={activeItemStyle}></div>
            {options.map(item => {
                return (<div key={item.value} className={`mi-tabs-item ${modelValue == item.value ? 'mi-tabs-item-active' : ''}`}
                    ref={(el) => { itemRef.push(el) }} onClick={() => { setStyle(item.value) }}>
                    {item.label}
                </div>)
            })}
        </div>
    )
}

Tabs.defaultProps = {
    modelValue: '',
    options: [],
    width: '',
    itemWidth: '',
    round: '',
    type: 'block'
}
export default memo(Tabs)