import React, { useState } from "react";
import { Modal } from "@mui/material";

export default function CommunityModal(props) {

    const handleClose = () => {
        props.onClose();
    };
    return (
        <>
            <Modal
                open={props.open}
                onClose={() => props.onClose()}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="icon mb-3">
                        <img src="./images/community/com-logo.png" className="rounded mx-auto d-block" alt="..." />
                    </div>
                    <div className="title01 mx-auto d-block">
                        <h5 className="modal-title" id="exampleModalLongTitle">Basic Rules to join community</h5>
                    </div>
                    <div className="title02 mx-auto d-block">
                        <p>Below are the Content Standards and Rules (the “Rules”) for participating in our Discord and related chat channels or servers (our “Channels”, each individually a “Channel”). Your failure to follow the Rules is in the sole
                            discretion of IGG and failure to follow these Rules may result in a disciplinary action which might include the suspension of your participation with our Channels and/or being banned from our Channels. The rules may be
                            updated as the discord grows.
                        </p>
                        <ol>
                            <li>We are aware of the diversity in terms of language, please keep all Channels not identified as “International” English only. For other languages use the international Channel.</li>
                            <li>Be respectful of others in the community. Toxicity, racism, misogyny and etc will not be tolerated. and may result in a ban.</li>
                            <li>No posting NSFW images of any kind . If you do, you will be banned onsite</li>
                        </ol>

                    </div>
                    <div className="form-group form-check mx-auto d-block">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">I agree to the <span>terms & conditions</span> of ArtistFirst for random text and words.</label>
                    </div>
                    <div className="modal-footer mx-auto d-block">
                        <button type="button" className="btn" onClick={handleClose}>I agree</button>
                    </div>
                </div>
            </div>
            </Modal>
        </>
    );
}
