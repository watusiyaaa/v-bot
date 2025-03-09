let maintenanceMode = false;

module.exports = {
    getMaintenanceMode: () => maintenanceMode,
    setMaintenanceMode: (mode) => { maintenanceMode = mode; }
};