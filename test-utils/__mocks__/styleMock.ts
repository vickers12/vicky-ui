console.log("✅ styleMock loaded!");

export default new Proxy(
    {},
    {
        get: (_, key) => key
    }
);
