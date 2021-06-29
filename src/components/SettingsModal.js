/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import '../styles/SettingsModal.css';
import { ReactComponent as Close } from '../svg/close.svg';

const SettingsModal = ({
  handleSettingsModal,
  handleLogOut,
  countriesCount,
}) => (
  <div className="settings--modal-background">
    <button
      className="settings--modal-close-bg"
      type="button"
      onClick={() => handleSettingsModal()}
    />
    <div className="settings--modal-content">
      <div className="settings--title">
        <h1>Settings</h1>
        <button
          type="button"
          className="settings--close"
          onClick={() => handleSettingsModal()}
        >
          <Close />
        </button>
      </div>
      <div className="settings--content-actual">
        <p>{`You have visited ${countriesCount}/195 countries`}</p>
      </div>
      <button
        type="button"
        className="settings--log-out"
        onClick={() => handleLogOut()}
      >
        Log out
      </button>
    </div>
  </div>
);

export default SettingsModal;
