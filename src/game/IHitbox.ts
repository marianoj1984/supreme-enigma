import { Rectangle } from "pixi.js";

export interface IHitbox{
    getHitbox():Rectangle;
}

export function checkCollision(objA:IHitbox, objB:IHitbox): Rectangle | null{

    const rA = objA.getHitbox();
    const rB = objB.getHitbox();

    //colision horizontal
    const rightmostLeft = rA.left < rB.left ? rB.left:rA.left;
    const leftmostRight = rA.right > rB.right ? rB.right:rA.right;
    //colisión vertical
    const bottommostTop = rA.top < rB.top ? rB.top:rA.top;
    const topmostBottom = rA.bottom > rB.bottom ? rB.bottom:rA.bottom;

    if(rightmostLeft<leftmostRight && bottommostTop < topmostBottom){
        
        const retval =  new Rectangle();
        retval.x = rightmostLeft;
        retval.y = bottommostTop; 
        retval.width = leftmostRight - rightmostLeft; 
        retval.height = topmostBottom - bottommostTop;

        return retval;
    }else{
        return null;
    }

}