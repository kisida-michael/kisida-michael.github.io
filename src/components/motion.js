export const picture = {
    visible: { y: 0, opacity: 1, scale: 1, transition: { duration: .7 } },
    hidden: { y: 64, opacity: 0, scale: 1, transition: { duration: .7 } },
}
export const header = {
    visible: { y: 0, opacity: 1, scale: 1, transition: { duration: .7, } },
    hidden: { y: 64, opacity: 0, scale: 1 },
}

export const text = {
    visible: { y: 0, opacity: 1, scale: 1, transition: { duration: .7, delay: .2} },
    hidden: { y: 64, opacity: 0, scale: 1 },
}
export const skillAnimation = {
    visible: { y: 0, opacity: 1, scale: 1, transition: { duration: .7, delay: .2} },
    hidden: { y: 64, opacity: 0, scale: 1 },
}
export const button = {
    visible: { y: 0, opacity: 1, scale: 1, transition: { duration: .7, delay: .5 } },
    hidden: { y: 64, opacity: 0, scale: 1 },
}
export const card1_3 = {
    visible: { x: 0, opacity: 1, scale: 1, transition: { duration: .7, delay: .2 } },
    hidden: { x: 64, opacity: 0, scale: 1,transition: { duration: .7, delay: .2 }},

    set changeAnimation(mobileAnimation) {
        this.hidden = mobileAnimation
    }
}
export const card4_6 = {
    visible: { x: 0, opacity: 1, scale: 1, transition: { duration: .7, delay: .4 } },
    hidden: { x: 64, opacity: 0, scale: 1,transition: { duration: .7, delay: .2 } },

    set changeAnimation(mobileAnimation) {
        this.hidden = mobileAnimation
    }
}
export const sectionTitle = {
    visible: { x: 0, opacity: 1, scale: 1, transition: { duration: .7, delay: .1 } },
    hidden: { x: 64, opacity: 0, scale: 1,transition: { duration: .7, delay: .2 } },

    set changeAnimation(mobileAnimation) {
        this.hidden = mobileAnimation
    }
}
export const modalCard = {
    visible: { x: 0, opacity: 1, scale: 1, transition: { duration: .7 } },
    hidden: { x: 0, opacity: 0, scale: 1,transition: { duration: .7 } },
}
export const modalBG = {
    visible: { x: 0, opacity: 1, scale: 1, transition: { duration: .5 } },
    hidden: { x: 0, opacity: 0, scale: 1,transition: { duration: .5 } },
}

export const modalContent = {
    visible: { y: 0, opacity: 1, scale: 1, transition: { duration: .7, delay: .2} },
    hidden: { y: 64, opacity: 0, scale: 1,transition: { duration: .7, delay: .2 } },

    set changeAnimation(mobileAnimation) {
        this.hidden = mobileAnimation
    }
}

export const modalImage = {
    visible: { y: 0, opacity: 1, scale: 1, transition: { duration: .7, delay: .4} },
    hidden: { y: 64, opacity: 0, scale: 1,transition: { duration: .7, delay: .4 } },

    set changeAnimation(mobileAnimation) {
        this.hidden = mobileAnimation
    }
}

export const fadeIn = {
    visible: { x: 0, opacity: 1, scale: 1, transition: { duration: .5 } },
    hidden: { x: 0, opacity: 0, scale: 1,transition: { duration: .5 } },
}