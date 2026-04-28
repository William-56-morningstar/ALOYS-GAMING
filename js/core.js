const AloysCore = {
        xp: parseInt(localStorage.getItem('aloys_xp')) || 0,
            init() {
                    this.updateUI();
                        },
                            updateUI() {
                                    const xpElement = document.getElementById('user-xp');
                                            if(xpElement) xpElement.innerText = this.xp.toString().padStart(4, '0');
                                                }
                                                };
                                                window.onload = () => AloysCore.init();
                                                
}