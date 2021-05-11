const System = (state, { touches }) => {
    touches.map(t => {
        console.log(t, state);
    })


    // touches.filter(t => t.type === "move").forEach(t => {
    //     let player = entities.player;
    //     if (player && player.position) {
    //         player.position = [
    //             player.position[0] + t.delta.pageX,
    //             player.position[1] + t.delta.pageY
    //         ];
    //     }
    // });

    return state;
};

export { System };