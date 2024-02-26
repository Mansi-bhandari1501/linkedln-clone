import errorHandler from "../lib/utils.js";
import { connectionService } from "../service/index.js";

export const sendConnection = async (req, res) => {
    try {
      const response = await connectionService.createConnection(req);
      return res.status(201).json({
        success: true,
        connection: response,
      });
    } catch (error) {
      errorHandler(res, error);
    }
  };
export const removeConnection = async (req, res) => {
    try {
      const response = await connectionService.rejectConnection(req);
      return res.status(201).json({
        success: true,
        connection: response,
      });
    } catch (error) {
      errorHandler(res, error);
    }
  };
export const receivedConnection = async (req, res) => {
    try {
      const response = await connectionService.showReceivedConnection(req);
      return res.status(201).json({
        success: true,
        connection: response,
      });
    } catch (error) {
      errorHandler(res, error);
    }
  };
export const pendingConnection = async (req, res) => {
    try {
      const response = await connectionService.showPendingConnection(req);
      return res.status(201).json({
        success: true,
        connection: response,
      });
    } catch (error) {
      errorHandler(res, error);
    }
  };
export const activeConnection = async (req, res) => {
    try {
      const response = await connectionService.showActiveConnection(req);
      return res.status(201).json({
        success: true,
        connection: response,
      });
    } catch (error) {
      errorHandler(res, error);
    }
  };
export const updateStatusConnection = async (req, res) => {
    try {
      const response = await connectionService.updateConnection(req);
      return res.status(201).json({
        success: true,
        connection: response,
      });
    } catch (error) {
      errorHandler(res, error);
    }
  };


  export default {
    sendConnection,
    removeConnection,
    receivedConnection,
    pendingConnection,
    activeConnection,
    updateStatusConnection
    
  };