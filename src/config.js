let maintenanceMode = false;
let maintenanceReason = '';

module.exports = {
    getMaintenanceMode: () => maintenanceMode,
    setMaintenanceMode: (mode) => { maintenanceMode = mode; },
    getMaintenanceReason: () => maintenanceReason,
    setMaintenanceReason: (reason) => { maintenanceReason = reason; }
};