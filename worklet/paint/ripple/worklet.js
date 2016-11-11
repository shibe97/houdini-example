registerPaint('ripple', class {
    static get inputProperties() { return ['background-color', '--ripple-color', '--animation-tick', '--ripple-x', '--ripple-y']; }
    paint(ctx, geom, properties) {
      const bgColor = properties.get('background-color').cssText;
      const rippleColor = properties.get('--ripple-color').cssText;
      const x = parseFloat(properties.get('--ripple-x').cssText);
      const y = parseFloat(properties.get('--ripple-y').cssText);
      let tick = parseFloat(properties.get('--animation-tick').cssText);
      if(tick < 0)
        tick = 0;
      if(tick > 1000)
        tick = 1000;

      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, geom.width, geom.height);
      ctx.fillRect(0, 0, geom.width, geom.height);

      ctx.fillStyle = rippleColor;
      ctx.globalAlpha = 1 - tick/1000;
      ctx.rect(
        x - geom.width * tick/2000,
        0,
        geom.width * tick/1000, // radius
        geom.height // radius
      );
      ctx.fill();
    }
});
