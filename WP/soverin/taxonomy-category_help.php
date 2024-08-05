<?php

get_header();

$ids = get_queried_object_id();
$icon = get_field('icon', 'category_help_'.$ids);
$name = get_queried_object()->name;
$description = get_queried_object()->description;

$terms = get_terms(['taxonomy' => 'category_help', 'hide_empty' => false]);


get_template_part('templates/banner-page');

?>

    <section class="help">
        <div class="content-width">
            <div class="content">
                <div class="help-menu">
                    <?php if($terms):?>
                        <ul>
                            <?php foreach ($terms as $term):
                                $img = get_field('icon', 'category_help_'.$term->term_id);
                            ?>
                                <li<?= $ids==$term->term_id?' class="current"':'';?>><a href="<?= get_term_link($term->term_id);?>"><?= $img?'<img src="'.$img['url'].'" alt="'.$term->name.'">':'';?><?= $term->name;?></a></li>
                            <?php endforeach;?>
                        </ul>
                    <?php endif;?>
                </div>

                <div class="help-content">
                    <div class="account">
                        <div class="title">

                            <h2><?= $icon?'<img src="'.$icon['url'].'" alt="'.$name.'">':'';?><?= $name;?></h2>

                            <?= $description?'<p>' . $description . '</p>':'';?>

                        </div>

                        <?php if(have_posts()):?>
                            <ul class="account-list">
                                <?php while(have_posts()): the_post();?>
                                    <li><a href="<?php the_permalink();?>"><?php the_title();?></a></li>
                                <?php endwhile;?>
                            </ul>
                        <?php endif;?>
                    </div>
                </div>
            </div>
        </div>
    </section>



<?php get_footer();
