<?php

$image = get_field('image');
$title = get_field('title');
$text = get_field('text');

?>

<section class="banner-help">
    <div class="content-width">
        <div class="content">

            <?php if($image):?>
                <div class="bg">
                    <img src="<?= $image['url'];?>" alt="<?= $image['alt'];?>">
                </div>
            <?php endif;?>

            <div class="wrap">

                <?= $title?'<h1>'.$title.'</h1>':'<h1>'.get_the_title().'</h1>';?>

                <?= $text?$text:'';?>

            </div>
        </div>
    </div>
</section>
