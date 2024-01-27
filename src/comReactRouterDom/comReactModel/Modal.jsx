import React, { useState } from "react";
import ShowModal from "./ShowModal";
import "./ModelCSS.css"

function Modal() {
    const [showModal, setShowModal] = useState(false);
    const closeModal = () => setShowModal(false);
    return (
        <div>
            <button className="model-btn" onClick={() => setShowModal(true)}>Open Modal</button>
            {showModal && <ShowModal closeModel={closeModal} />}
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
                laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
                cumque officia omnis quos iure eveniet accusamus iste consequuntur?
                Odit, quia repellat.
            </p>
            <br /><br /><br /><br /><br />
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
                laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
                cumque officia omnis quos iure eveniet accusamus iste consequuntur?
                Odit, quia repellat.
            </p>
            <br /><br /><br /><br /><br />
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
                laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
                cumque officia omnis quos iure eveniet accusamus iste consequuntur?
                Odit, quia repellat.
            </p>
            <br /><br /><br /><br /><br />
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
                laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
                cumque officia omnis quos iure eveniet accusamus iste consequuntur?
                Odit, quia repellat.
            </p>
            <br /><br /><br /><br /><br />
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
                laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
                cumque officia omnis quos iure eveniet accusamus iste consequuntur?
                Odit, quia repellat.
            </p>
            <br /><br /><br /><br /><br />
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
                laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
                cumque officia omnis quos iure eveniet accusamus iste consequuntur?
                Odit, quia repellat.
            </p>
            <br /><br /><br /><br /><br />
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
                laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
                cumque officia omnis quos iure eveniet accusamus iste consequuntur?
                Odit, quia repellat.
            </p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
                laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
                cumque officia omnis quos iure eveniet accusamus iste consequuntur?
                Odit, quia repellat.
            </p>
            <br /><br /><br /><br /><br />
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
                laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
                cumque officia omnis quos iure eveniet accusamus iste consequuntur?
                Odit, quia repellat.
            </p>
            <br /><br /><br /><br /><br />
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
                laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
                cumque officia omnis quos iure eveniet accusamus iste consequuntur?
                Odit, quia repellat.
            </p>
            <br /><br /><br /><br /><br />
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
                laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
                cumque officia omnis quos iure eveniet accusamus iste consequuntur?
                Odit, quia repellat.
            </p>
            <br /><br /><br /><br /><br />
        </div>
    );
};

export default Modal;