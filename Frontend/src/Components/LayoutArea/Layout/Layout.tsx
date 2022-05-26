import "./Layout.css";
import Findurl from "../../findurlArea/findurlList/findurlList";
import Routing from "../Routing/Routing";
import Menu from "../Menu/Menu";
import Header from "../Header/Header";


function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <header>
                <Header />
            </header>

            <aside >
                <Menu />
            </aside>
            <main>
            <Routing />
            </main>
        </div>
    );
}

export default Layout;

function cors(): any {
    throw new Error("Function not implemented.");
}