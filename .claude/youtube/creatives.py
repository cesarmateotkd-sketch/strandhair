from PIL import Image, ImageDraw, ImageFont
F='/home/user/strandhair/fonts/'
ESP,CAR,CREAM,SAND,CART,MUTED=(61,43,31),(196,148,90),(250,247,242),(232,221,208),(139,94,26),(107,91,83)
def f(n,s,w=None):
    x=ImageFont.truetype(F+n,s)
    if w:
        try: x.set_variation_by_name(w)
        except Exception: pass
    return x
# profile 800x800
im=Image.new('RGB',(800,800),ESP); d=ImageDraw.Draw(im)
fi=f('cormorant-italic.ttf',640,'SemiBold')
bb=d.textbbox((0,0),'s',font=fi); w,h=bb[2]-bb[0],bb[3]-bb[1]
d.text(((800-w)/2-bb[0]+18,(800-h)/2-bb[1]-10),'s',font=fi,fill=CAR)
im.save('profile.png')
# banner 2560x1440, safe area 1546x423 centered
B=Image.new('RGB',(2560,1440),CREAM); d=ImageDraw.Draw(B)
for y in range(0,1440,48): d.line([0,y,2560,y],fill=(245,240,232),width=2)
cx,cy=1280,720
# decorative strands across the full width (only seen on TV/desktop)
import math
for k,(amp,per,col) in enumerate([(26,120,SAND),(40,90,(226,210,190)),(60,60,SAND)]):
    y0=230+k*60
    d.line([(x, y0+amp*math.sin(x/per)) for x in range(0,2561,6)],fill=col,width=6)
    y1=1210-k*60
    d.line([(x, y1+amp*math.sin(x/per+1)) for x in range(0,2561,6)],fill=col,width=6)
fs=f('cormorant-normal.ttf',190,'Bold'); t='STRAND'
w=d.textlength(t,font=fs); d.text((cx-w/2,cy-215),t,font=fs,fill=ESP)
fi=f('cormorant-italic.ttf',78,'Medium'); t='Hair myths, checked against the research.'
w=d.textlength(t,font=fi); d.text((cx-w/2,cy+5),t,font=fi,fill=CART)
fm=ImageFont.truetype('/usr/share/fonts/truetype/jetbrains-mono/JetBrainsMono-Bold.ttf',40)
t='NEW SHORTS WEEKLY  ·  HAIRTYPEQUIZ.HAIR'
w=d.textlength(t,font=fm); d.text((cx-w/2,cy+128),t,font=fm,fill=MUTED)
B.save('banner.png')
# safe-area preview (phone crop)
B.crop((cx-773,cy-211,cx+773,cy+212)).save('banner-safe.png')
