class Plane {
    constructor() {
        const image = document.createElement("canvas");
        image.width = canvas.width;
        image.height = canvas.height;
        const ctx = image.getContext('2d');

        ctx.strokeStyle = "#ccc";
        ctx.lineWidth = 6;
        ctx.moveTo(center.x, 0);
        ctx.lineTo(center.x, image.height);
        
        ctx.moveTo(0, center.y);
        ctx.lineTo(image.width, center.y);

        ctx.lineWidth = 2;
        for(let i=0; i < image.height/2; i+= PIXELS_PER_UNIT) {
            ctx.moveTo(center.x - 5, center.y-i);
            ctx.lineTo(center.x + 5, center.y-i);
            ctx.moveTo(center.x - 5, center.y+i);
            ctx.lineTo(center.x + 5, center.y+i);
        }
        for(let i=0; i < image.width/2; i+= PIXELS_PER_UNIT) {
            ctx.moveTo(center.x-i, center.y - 5);
            ctx.lineTo(center.x-i, center.y + 5);
            ctx.moveTo(center.x+i, center.y - 5);
            ctx.lineTo(center.x+i, center.y + 5);
        }
        
        ctx.stroke();

        this.draw = () => context.drawImage(image, 0, 0);
    }
}