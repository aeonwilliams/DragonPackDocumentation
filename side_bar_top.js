document.write(`\
<div id="wrapper">\
    <div id="sidebar-wrapper">\
        <ul class="sidebar-nav">\
            <li class="sidebar-brand">\
                <a>DragonPack Documentation</a>\
            </li>\
            <!--             <li>\
                <a href="getting_started.html">Getting Started</a>\
            </li> -->\
            <li>\
                <a href="example_projects.html">Example Projects</a>\
            </li>\
            <!--   <li><a href="#" id="btn-1" data-toggle="collapse" data-target="#classlist" aria-expanded="false">Classes</a>\
                <ul class="nav collapse" id="classlist" role="menu" aria-labelledby="btn-1">\
                    <li class="dragonpack-class"><a href="template.html">Class Template</a></li>\
                    <li class="dragonpack-class"><a href="dispatch_on_keyboard_input.html">Dispatch On Keyboard Input</a></li>\
                    <li class="dragonpack-class"><a href="dispatch_on_mouse_input.html">Dispatch On Mouse Input</a></li>\
                    <li class="dragonpack-class"><a href="modify_counter_on_event.html">Modify Counter on Event</a></li>\
                    <li class="dragonpack-class"><a href="counter.html">Counter</a></li>\
                    <li class="dragonpack-class"><a href="text_display.html">Text Display</a></li>\
                    <li class="dragonpack-class"><a href="modify_sprite_on_event.html">Modify Sprite on Event</a></li>\
\
                </ul>\
            </li>\
 -->\
            <li><a href="aggressive_path_follower.html">Aggressive Path Follower</a></li>\
            <li><a href="attach_on_event.html">Attach On Event</a></li>\
            <li><a href="bar_display.html">Bar Display</a></li>\
            <li><a href="camera_shader_enabler.html">Camera Shader Enabler</a></li>\
            <li><a href="change_window_resolution.html">Change Window Resolution</a></li>\
            <li><a href="change_windowed_state.html">Change Windowed State</a></li>\
            <li><a href="control_particles_on_event.html">Control Particles On Event</a></li>\
            <li><a href="counter.html">Counter</a></li>\
            <li><a href="debug_draw.html">Debug Draw</a></li>\
            <li><a href="debug_draw_forward_vector.html">Debug Draw Forward Vector</a></li>\
            <li><a href="destroy_on_event.html">Destroy On Event</a></li>\
            <li><a href="detach_on_event.html">Detach On Event</a></li>\
            <li><a href="dispatch_on_animator_cycle.html">Dispatch On Animator Cycle</a></li>\
            <li><a href="dispatch_on_button_input.html">Dispatch On Button Input</a></li>\
            <li><a href="dispatch_on_collision.html">Dispatch On Gamepad Input</a></li>\
            <li><a href="dispatch_on_gamepad_input.html">Dispatch On Keyboard Input</a></li>\
            <li><a href="dispatch_on_keyboard_input.html">Dispatch On Line Of Sight</a></li>\
            <li><a href="dispatch_on_line_of_sight.html">Dispatch On Mouse Input</a></li>\
            <li><a href="dispatch_on_mouse_input.html">Dispatch On Start</a></li>\
            <li><a href="dispatch_on_start.html">Dispatch On Visibility</a></li>\
            <li><a href="dispatch_on_visibility.html">Dispatch on Collision</a></li>\
            <li><a href="display_object_base.html">Display Object Base</a></li>\
            <li><a href="dynamic_platformer_controller.html">Dynamic Platformer Controller</a></li>\
            <li><a href="dynamic_topdown_orthogonal_controller.html">Dynamic TopDown Orthogonal Controller</a></li>\
            <li><a href="dynamic_topdown_rotational_controller.html">Dynamic TopDown Rotational Controller</a></li>\
            <li><a href="exit_game_on_event.html">Exit Game On Event</a></li>\
            <li><a href="face_velocity.html">Face Velocity</a></li>\
            <li><a href="fade_sound_on_event.html">Fade Sound On Event</a></li>\
            <li><a href="followobject.html">FollowObject</a></li>\
            <li><a href="gradient_color_animatior.html">Gradient Color Animatior</a></li>\
            <li><a href="load_scene_on_event.html">Load Scene On Event</a></li>\
            <li><a href="magnetic_field.html">Magnetic Field</a></li>\
            <li><a href="modify_counter.html">Modify Counter</a></li>\
            <li><a href="modify_game_object_active_state.html">Modify Game Object Active State</a></li>\
            <li><a href="modify_pauses_state.html">Modify Pauses State</a></li>\
            <li><a href="modify_rigidbody_2d_on_event.html">Modify Rigidbody 2D On Event</a></li>\
            <li><a href="modify_script_active_state.html">Modify Script Active State</a></li>\
            <li><a href="modify_sprite_on_event.html">Modify Sprite On Event</a></li>\
            <li><a href="modify_transform_on_event.html">Modify Transform On event</a></li>\
            <li><a href="modify_volume.html">Modify Volume</a></li>\
            <li><a href="object_display.html">Object Display</a></li>\
            <li><a href="path_follower.html">Path Follower</a></li>\
            <li><a href="play_sound_on_event.html">Play Sound On Event</a></li>\
            <li><a href="radial_display.html">Radial Display</a></li>\
            <li><a href="rotate_towards_object.html">Rotate Towards Object</a></li>\
            <li><a href="set_initial_angular_velocity.html">Set Initial Angular Velocity</a></li>\
            <li><a href="set_initial_velocity.html">Set Initial Velocity</a></li>\
            <li><a href="shake_on_event.html">Shake On Event</a></li>\
            <li><a href="spawn_on_event.html">Spawn On Event</a></li>\
            <li><a href="stop_sound_onevent.html">Stop Sound OnEvent</a></li>\
            <li><a href="timer.html">Timer</a></li>\
            <li><a href="tracking_camera.html">Tracking Camera</a></li>\
            <li><a href="tracking_camera_object.html">Tracking Camera Object</a></li>\
            <li><a href="transform_animator.html">Transform Animator</a></li>\
            <li><a href="translation_bounds.html">Translation Bounds</a></li>\
            <li><a href="typing_text.html">Typing Text</a></li>\
            <li><a href="velocity_clamp.html">Velocity Clamp</a></li>\
            <li><a href="velocity_effect.html">Velocity Effect</a></li>\
            <li><a href="velocity_towards_game_object.html">Velocity Towards Game Object</a></li>\
            <li><a href="vibrate_controller.html">Vibrate Controller</a></li>\
            <li><a href="volume_indicator.html">Volume Indicator</a></li>\
            <li><a href="volume_manager.html">Volume Manager</a></li>\
            <li><a href="wind_field.html">Wind Field</a></li>\
        </ul>\
    </div>\
\
\
    <!-- /#sidebar-wrapper -->\
\
    <!-- Page Content -->\
    <div id="page-content-wrapper">\
        <div class="container-fluid">\
            <div class="row">\
                <div id="gettingstarted" class="col-lg-12">\ ` );
