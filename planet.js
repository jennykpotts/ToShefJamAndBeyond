class planet{
    constructor(img,topx,topy,bottomx,bottomy){
        this.img=img;
        this.topx=topx;
        this.topy=topy;
        this.bottomx=bottomx;
        this.bottomy=bottomy;

    }
    get img() {
        return this.img;
    }

    get topx() {
        return this.topx;
    }
    get topy(){
        return this.topy;

    }
    get bottomx(){
        return this.bottomx
    }
    get bottomy(){
        return this.bottomy
    }

    moveplanet(){
        this.topx-=15;
        this.bottomx-=15;
    }
}