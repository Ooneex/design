import {WarningContainerType} from "./types";
import "./WarningContainer.scss"
import {Link} from "../Link/Link";
import {IconIdea} from "../Icon/IconIdea";


export const WarningContainer = ({text} :WarningContainerType) => {
    return(
        <div className={"_ooneex-warningcontainer"}>
            <span className={"square"}><IconIdea variant={"white"} size={"md"}></IconIdea></span>

            <span className={"text"}><text>Try out thisLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean risus mauris urna ut pellentesque aliquet mollis et. Sagittis sed egestas duis commodo venenatis gravida venenatis quis. Id suspendisse leo ac nunc. Sagittis, sed dolor consectetur egestas metus. link. <Link to={"https://www.youtube.com/watch?v=cAdelIB9CQk&list=RDcAdelIB9CQk&start_radio=1"} className={"link"}>Youtube link</Link></text></span>

        </div>
    )
}