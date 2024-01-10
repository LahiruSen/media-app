import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function ExpandablePanel({ header, children }) {

    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <div className="mb-2 border rounded">
            <div className="flex p-2 justify-between items-center">
                <div className="flex flex-row items-center justify-between">
                    {header}
                </div>
                <div onClick={handleExpand} className="cursor-pointer">
                    {isExpanded ? <GoChevronDown></GoChevronDown> : <GoChevronLeft></GoChevronLeft>}
                </div>
            </div>
            {isExpanded && <div className="p-2 border-t">{children}</div>}
        </div>
    )

}

export default ExpandablePanel