import Matter from "matter-js";

let mouse = Matter.MouseConstraint.create(engine, options)

const System = (entities, { touches }) => {
    touches.map(t => {
        console.log(Matter.MouseConstraint.mouse)
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

    return entities;
};

export { System };