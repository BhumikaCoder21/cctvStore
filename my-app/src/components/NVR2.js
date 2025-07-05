import React from "react";
import "./PTZ2.css";

function NVR2() {
  return (
    <>
      <div className="ptz-section" id="ptz">
        <h2 className="ptz-heading">
          <span className="green">NVR (Network Video Recorder)</span>
        </h2>
        <p className="ptz-subheading">
          We offer our customers latest premium quality Long Range CCTV Camera
          Network Video Recorder at Best Price.
        </p>

        <div className="ptz-content">
          <div className="ptz-image">
            <img
              src="https://www.cctvcameradelhi.in/images/Network-Video-Recorder.png"
              alt="PTZ CCTV Cameras"
            />
          </div>
          <div className="ptz-text">
            <p>
              NETWORK VIDEO RECORDER (NVR) are IP based devices used to connect
              multiple IP Cameras and to store video and images. These can be
              placed anywhere provided they are on the same LAN. Select the
              integrated NVR System or use your own Windows computer to create a
              Video Management Software System (VMS). If you’re not sure which
              recording system to use, take a look at our IP camera video
              recording system comparison table.What is an NVR? An NVR is a
              Network Video Recorder. It is a network-attached computer system
              that includes video management and recording software, the
              computer and the hard drive storage. The NVR helps you install and
              manage the IP cameras. The management software allows you to
              include a recording schedule for the cameras, or use an alarm
              condition such as motion detection to cause the video to be
              recorded.
            </p>
          </div>
        </div>
      </div>

      {/* Duplicated section with changed content */}
      <div className="ptz-section" id="ptz-duplicate">
        <h2 className="ptz-heading">
          <span className="green">NVR (Network Video Recorder) Features</span>
        </h2>
        <div className="ptz-content">
          <div className="ptz-image">
            <img
              src="https://www.cctvcameradelhi.in/images/nvr-feature.png"
              alt="NVR Advanced Features"
            />
          </div>
          <div className="ptz-text">
            <p>
              Network Video Recorder Feature: Very easy to install. It
              auto-detects the cameras Very easy to use, featuring an excellent
              user interface. Map displays allow you to visually select cameras
              Access live and recorded video on local, remote and mobile devices
              Continuous motion, timeline Easy export of selected video for
              evidence Many powerful features for finding the video you need and
              exporting for evidence Continuous motion, time or alarm-based
              recording configurable per camera Search recorded video with a
              timeline search or graphical thumbnail search, playback multiple
              cameras simultaneously Easily control PTZ cameras Export audio,
              video and pictures to be easily e-mailed or saved View an instant
              replay of video from any camera with exacqReplay
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default NVR2;
